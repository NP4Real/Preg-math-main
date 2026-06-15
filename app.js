// ============================================================
// APP.JS - Arquivo Principal da Aplicação (PostgreSQL)
// ============================================================

// Carregar variáveis de ambiente do arquivo .env o mais cedo possível
require('dotenv').config();

const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();

// Usar a porta do .env ou 3000 como padrão
const PORT = process.env.PORT || 3000;

// ============================================================
// MIDDLEWARES
// ============================================================
app.use(cors());
app.use(express.json());


// ============================================================
// IMPORTAR ROTAS
// ============================================================

const buscaRoute = require('./src/routes/buscaRoute');
const authRoute = require('./src/routes/authRoute');

// ============================================================
// REGISTRAR ROTAS
// ============================================================

// Definindo o prefixo '/busca' para este grupo de rotas
app.use('/busca', buscaRoute);
// Definindo o prefixo '/auth' para o login
app.use('/auth', authRoute);

// ============================================================
// SERVIR FRONTEND EM PRODUÇÃO
// ============================================================

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'dist')));

  app.get('*', (req, res) => {
    if (req.path.startsWith('/auth') || req.path.startsWith('/busca')) {
      return res.status(404).json({ message: 'Rota não encontrada' });
    }
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.json({
      mensagem: 'API da Faculdade com PostgreSQL - Bem-vindo!',
      versao: '1.0',
      banco: 'PostgreSQL'
    });
  });
}

// ============================================================
// INICIAR O SERVIDOR
// ============================================================

app.listen(PORT, () => {
  console.log('='.repeat(50));
  console.log('🚀 Servidor rodando!');
  console.log(`📍 URL: http://localhost:${PORT}`);
  console.log(`💾 Banco de Dados: PostgreSQL`);
  console.log('='.repeat(50));
  console.log('📋 Rotas principais disponíveis:');
  console.log(`   Raiz:  http://localhost:${PORT}/`);
  console.log(`   Busca: http://localhost:${PORT}/busca/questoes-tema`);
  console.log('='.repeat(50));
});
