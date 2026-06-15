const pool = require('../config/database');

// Base query that aggregates alternativas into a JSON array per question
const baseAggregate = `
SELECT
  q.idQ,
  q.enunciado,
  q.Dificuldade,
  q.linkk,
  q.imgQ,
  v.nome_V,
  t.nome_T,
  json_agg(json_build_object('id_alt', a.id_alt, 'enunciado', a.Enunciado, 'validacao', a.Validacao, 'comentario', a.Comentario) ORDER BY a.id_alt) AS alternativas
FROM Questoes q
LEFT JOIN Alternativas a ON a.idQuestoes = q.idQ
LEFT JOIN Vestibulares v ON q.idVestibulares = v.idV
LEFT JOIN Temas t ON q.idTemas = t.idT
`

function buildLimitOffset(page, limit) {
    const l = Math.max(1, parseInt(limit) || 10);
    const p = Math.max(1, parseInt(page) || 1);
    const offset = (p - 1) * l;
    return { limit: l, offset };
}

async function listarTodos(page, limit) {
    const { limit: l, offset } = buildLimitOffset(page, limit);
    const sql = baseAggregate + '\nGROUP BY q.idQ, v.nome_V, t.nome_T ORDER BY q.idQ LIMIT $1 OFFSET $2';
    const result = await pool.query(sql, [l, offset]);
    return result.rows;
}

async function listarPorTema(nomeTema, page, limit) {
    const { limit: l, offset } = buildLimitOffset(page, limit);
    const sql = baseAggregate + '\nWHERE t.nome_T ILIKE $1 GROUP BY q.idQ, v.nome_V, t.nome_T ORDER BY q.idQ LIMIT $2 OFFSET $3';
    const result = await pool.query(sql, [nomeTema, l, offset]);
    return result.rows;
}

async function listarPorVestibular(vestibular, page, limit) {
    const { limit: l, offset } = buildLimitOffset(page, limit);
    const sql = baseAggregate + '\nWHERE v.nome_V ILIKE $1 GROUP BY q.idQ, v.nome_V, t.nome_T ORDER BY q.idQ LIMIT $2 OFFSET $3';
    const result = await pool.query(sql, [vestibular, l, offset]);
    return result.rows;
}

async function listarPorVestibularTema(vestibular, tema, page, limit) {
    const { limit: l, offset } = buildLimitOffset(page, limit);
    const sql = baseAggregate + '\nWHERE v.nome_V ILIKE $1 AND t.nome_T ILIKE $2 GROUP BY q.idQ, v.nome_V, t.nome_T ORDER BY q.idQ LIMIT $3 OFFSET $4';
    const result = await pool.query(sql, [vestibular, tema, l, offset]);
    return result.rows;
}

async function listarAleatorias(quantidade) {
    const q = Math.max(1, parseInt(quantidade) || 1);
    const sql = `WITH sel AS (SELECT idQ FROM Questoes ORDER BY RANDOM() LIMIT $1)
    ${baseAggregate} WHERE q.idQ IN (SELECT idQ FROM sel) GROUP BY q.idQ, v.nome_V, t.nome_T ORDER BY q.idQ`;
    const result = await pool.query(sql, [q]);
    return result.rows;
}

async function listarAleatoriasPorVestibular(vestibular, quantidade) {
    const q = Math.max(1, parseInt(quantidade) || 1);
    const sql = `WITH sel AS (SELECT idQ FROM Questoes WHERE idVestibulares = (SELECT idV FROM Vestibulares WHERE nome_V ILIKE $1) ORDER BY RANDOM() LIMIT $2)
    ${baseAggregate} WHERE q.idQ IN (SELECT idQ FROM sel) GROUP BY q.idQ, v.nome_V, t.nome_T ORDER BY q.idQ`;
    const result = await pool.query(sql, [vestibular, q]);
    return result.rows;
}

// Busca por palavra nas colunas relevantes (enunciado e alternativas)
async function buscarPorPalavra(palavra, page, limit) {
    const { limit: l, offset } = buildLimitOffset(page, limit);
    const like = `%${palavra}%`;
    const sql = baseAggregate + '\nWHERE q.enunciado ILIKE $1 OR a.Enunciado ILIKE $1 OR a.Comentario ILIKE $1 GROUP BY q.idQ, v.nome_V, t.nome_T ORDER BY q.idQ LIMIT $2 OFFSET $3';
    const result = await pool.query(sql, [like, l, offset]);
    return result.rows;
}

async function listarPorId(id) {
    const sql = baseAggregate + '\nWHERE q.idQ = $1 GROUP BY q.idQ, v.nome_V, t.nome_T';
    const result = await pool.query(sql, [id]);
    return result.rows[0] || null;
}

module.exports = {
    listarTodos,
    listarPorTema,
    listarPorVestibular,
    listarPorVestibularTema,
    listarAleatorias,
    listarAleatoriasPorVestibular,
    buscarPorPalavra
    , listarPorId
};