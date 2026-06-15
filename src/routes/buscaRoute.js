const express = require('express');
const router = express.Router();
const buscaController = require('../controllers/buscaController');

// Rota para listar todas as questões da view
router.get('/questoes-tema', buscaController.listarTodos);

// Rota para obter questão por id
router.get('/questoes-tema/id/:id', buscaController.listarPorId);

// Rota para filtrar por tema específico
router.get('/questoes-tema/filtrar/:tema', buscaController.listarPorTema);

// Rota para filtrar por vestibular específico
router.get('/questoes-tema/vestibular/:vestibular', buscaController.listarPorVestibular);

// Rota para filtrar por tema (alias)
router.get('/questoes-tema/tema/:tema', buscaController.listarPorTema);

// Rota para filtrar por tema de um vestibular específico
router.get('/questoes-tema/vestibular/:vestibular/tema/:tema', buscaController.listarPorVestibularTema);

// Rota para obter questões aleatórias (opcional query ?quantidade=5)
router.get('/questoes-tema/aleatorias', buscaController.listarAleatorias);

// Rota para obter questões aleatórias de um vestibular (opcional query ?quantidade=5)
router.get('/questoes-tema/vestibular/:vestibular/aleatorias', buscaController.listarAleatoriasPorVestibular);

// Rota para obter uma quantidade específica de questões (aleatórias)
router.get('/questoes-tema/quantidade/:quantidade', buscaController.listarQuantidade);

// Rota para busca por palavra (query param ?palavra=...)
router.get('/questoes-tema/busca', buscaController.buscarPorPalavra);

module.exports = router;
