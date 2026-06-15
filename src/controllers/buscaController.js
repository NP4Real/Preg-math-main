const QuestaoTema = require('../models/buscaModel');

    async function listarTodos(req, res) {
        const { page, limit } = req.query;
        try {
            const dados = await QuestaoTema.listarTodos(page, limit);
            return res.status(200).json(dados);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async function listarPorTema(req, res) {
        const { tema } = req.params;
        const { page, limit } = req.query;
        try {
            if (!tema) {
                return res.status(400).json({ message: 'O parâmetro "tema" é obrigatório.' });
            }
            const dados = await QuestaoTema.listarPorTema(tema, page, limit);
            return res.status(200).json(dados);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async function listarPorVestibular(req, res) {
        const { vestibular } = req.params;
        const { page, limit } = req.query;
        try {
            if (!vestibular) {
                return res.status(400).json({ message: 'O parâmetro "vestibular" é obrigatório.' });
            }
            const dados = await QuestaoTema.listarPorVestibular(vestibular, page, limit);
            return res.status(200).json(dados);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async function listarPorVestibularTema(req, res) {
        const { vestibular, tema } = req.params;
        const { page, limit } = req.query;
        try {
            if (!vestibular || !tema) {
                return res.status(400).json({ message: 'Os parâmetros "vestibular" e "tema" são obrigatórios.' });
            }
            const dados = await QuestaoTema.listarPorVestibularTema(vestibular, tema, page, limit);
            return res.status(200).json(dados);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async function listarAleatorias(req, res) {
        const quantidade = parseInt(req.query.quantidade) || 1;
        try {
            const dados = await QuestaoTema.listarAleatorias(quantidade);
            return res.status(200).json(dados);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async function listarAleatoriasPorVestibular(req, res) {
        const { vestibular } = req.params;
        const quantidade = parseInt(req.query.quantidade) || 1;

        try {
            if (!vestibular) {
                return res.status(400).json({ message: 'O parâmetro "vestibular" é obrigatório.' });
            }
            const dados = await QuestaoTema.listarAleatoriasPorVestibular(vestibular, quantidade);
            return res.status(200).json(dados);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async function listarQuantidade(req, res) {
        const quantidade = parseInt(req.params.quantidade) || 1;
        try {
            const dados = await QuestaoTema.listarAleatorias(quantidade);
            return res.status(200).json(dados);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async function listarPorId(req, res) {
        const { id } = req.params;
        if (!id) return res.status(400).json({ message: 'O parâmetro "id" é obrigatório.' });
        try {
            const dado = await QuestaoTema.listarPorId(id);
            if (!dado) return res.status(404).json({ message: 'Questão não encontrada.' });
            return res.status(200).json(dado);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async function buscarPorPalavra(req, res) {
        const { palavra } = req.query;
        if (!palavra) {
            return res.status(400).json({ message: 'O parâmetro de query "palavra" é obrigatório.' });
        }

        const { page, limit } = req.query;
        try {
            const dados = await QuestaoTema.buscarPorPalavra(palavra, page, limit);
            return res.status(200).json(dados);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

module.exports = { 
    listarTodos,
    listarPorTema,
    listarPorVestibular,
    listarPorVestibularTema,
    listarAleatorias,
    listarAleatoriasPorVestibular,
    listarQuantidade,
    buscarPorPalavra,
    listarPorId
};