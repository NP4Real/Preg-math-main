import { Link } from 'react-router-dom';
import './HomePage.css';

const featuredThemes = [
  {
    key: 'REGRA DE 3',
    label: 'Regra de 3',
    text: 'Use proporções para encontrar valores desconhecidos em problemas de escala, receita, velocidade e porcentagem.',
  },
  {
    key: 'PORCENTAGEM',
    label: 'Porcentagem',
    text: 'Treine aumentos, descontos, taxas e comparações que aparecem muito em vestibulares e no ENEM.',
  },
  {
    key: 'FRACAO',
    label: 'Fração',
    text: 'Revise equivalência, operações e interpretação de partes do todo com questões de prova.',
  },
  {
    key: 'RAZAO E PROPORCAO',
    label: 'Razão e proporção',
    text: 'Entenda relações entre grandezas e transforme enunciados em cálculos mais diretos.',
  },
];

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <p>
            O PregMath reúne questões de matemática de vestibulares em um só lugar, com simulados, videoaulas e introduções por tema para estudar sem se perder no caminho.
          </p>
        </div>

        <div className="hero-preview-box" aria-label="Ilustração principal do PregMath">
          <div className="hero-board">
            <img src="/assets/preguica.png" alt="Preguiça professora com quadro negro e livros" className="sloth-image" />
          </div>
        </div>
      </section>

      <section className="cards-section" aria-label="Temas em destaque">
        {featuredThemes.map((theme) => (
          <Link key={theme.key} to={`/temas?tema=${encodeURIComponent(theme.key)}`} className="theme-card-link">
            <article className="theme-card">
              <h2>{theme.label}</h2>
              <p>{theme.text}</p>
            </article>
          </Link>
        ))}
      </section>
    </div>
  );
}
