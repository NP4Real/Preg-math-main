const jwt = require('jsonwebtoken');

// ============================================================
// FUNÇÃO: login
// ROTA: POST /auth/login
// DESCRIÇÃO: Verifica credenciais do .env e gera token JWT
// ============================================================
async function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ mensagem: 'E-mail e senha são obrigatórios' });
  }

  try {
    const authUser = process.env.AUTH_USER;
    const authPassword = process.env.AUTH_PASSWORD;

    if (email !== authUser || password !== authPassword) {
      return res.status(401).json({ mensagem: 'Credenciais inválidas' });
    }

    const payload = { email: authUser, role: 'admin' };
    const secret = process.env.JWT_SECRET || 'secret_jwt_default';
    const token = jwt.sign(payload, secret, { expiresIn: '2h' });

    res.status(200).json({
      token,
      user: { name: 'Administrador', email: authUser, role: 'admin' },
    });
  } catch (err) {
    console.error('Erro no login:', err);
    res.status(500).json({ mensagem: 'Erro interno' });
  }
}

module.exports = {
  login,
};
