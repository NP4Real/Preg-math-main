import { useEffect, useMemo, useState } from 'react';
import './QuestionCard.css';

function useMathJax(dependencies) {
  useEffect(() => {
    const mathJax = window.MathJax;
    if (mathJax?.typesetPromise) {
      mathJax.typesetPromise().catch((error) => console.error('MathJax error:', error));
    }
  }, dependencies);
}

export default function QuestionCard({ question }) {
  const [selectedAlt, setSelectedAlt] = useState(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const vestibular = question.nome_V || question.nome_v || question.nome_Vestibular || question.vestibular || 'Vestibular';
  const tema = question.nome_T || question.nome_t || question.tema || 'Tema';
  const enunciado = question.enunciado || question.Enunciado || question.text || 'Questão sem enunciado disponível';
  const rawImage = question.imgQ || question.imgq || question.img || question.imagem;
  const image = typeof rawImage === 'string' && rawImage.trim() !== '' && rawImage.trim().toLowerCase() !== 'null' && rawImage.trim().toLowerCase() !== 'undefined' ? rawImage.trim() : null;
  const alternativas = useMemo(() => question.alternativas || [], [question.alternativas]);

  useEffect(() => {
    setSelectedAlt(null);
  }, [question]);

  useMathJax([question, selectedAlt]);

  const normalizeValidacao = (valor) => String(valor || '').trim().toLowerCase();
  const isRight = (alt) => ['s', 'sim', 'true', '1', 'correta', 'certo'].includes(normalizeValidacao(alt.validacao || alt.Validacao));
  const getCorrectAlternative = () => alternativas.find((alt) => isRight(alt));

  const renderComment = () => {
    if (!selectedAlt) return null;
    const correct = isRight(selectedAlt);
    const selectedComment = (selectedAlt.comentario || selectedAlt.Comentario || '').trim();
    const correctAlt = getCorrectAlternative();
    const correctComment = (correctAlt?.comentario || correctAlt?.Comentario || '').trim();
    const text = selectedComment || (correct ? 'Resposta correta!' : correctComment || 'Resposta incorreta.');

    return (
      <div className={`comment-box ${correct ? 'comment-correct' : 'comment-wrong'}`}>
        <strong>{correct ? 'Acertou!' : 'Errou!'}</strong>
        <p>{text}</p>
      </div>
    );
  };

  return (
    <article className="question-card">
      <div className="question-header">
        <span>{vestibular}</span>
        <strong>{tema}</strong>
      </div>
      <p className="question-text">{enunciado}</p>
      {image && (
        <div className="question-image-container">
          <img
            src={image}
            alt="Imagem da questão"
            className="question-image"
            onClick={() => setIsImageModalOpen(true)}
          />
        </div>
      )}
      <ul className="alternatives-list">
        {alternativas.map((alt, index) => {
          const id = alt.id_alt || alt.id || index;
          const selected = selectedAlt && (selectedAlt.id_alt || selectedAlt.id || alternativas.indexOf(selectedAlt)) === id;
          const correct = isRight(alt);
          const answerText = alt.enunciado || alt.Enunciado || 'Alternativa sem texto';
          return (
            <li key={id} className="alternative-item">
              <button
                type="button"
                className={`alternative-button ${selected ? 'selected' : ''} ${selected && correct ? 'correct' : ''} ${selected && !correct ? 'wrong' : ''} ${selectedAlt && correct ? 'correct' : ''}`}
                onClick={() => setSelectedAlt(alt)}
              >
                <span>{answerText}</span>
              </button>
            </li>
          );
        })}
      </ul>
      {renderComment()}

      {isImageModalOpen && image && (
        <div className="image-modal-overlay" onClick={() => setIsImageModalOpen(false)}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={() => setIsImageModalOpen(false)}>&times;</button>
            <img src={image} alt="Imagem da questão expandida" className="image-modal-img" />
          </div>
        </div>
      )}
    </article>
  );
}
