import { useState } from 'react';
import { Link } from 'react-router-dom';
import './VideoAulasPage.css';

const groups = [
  {
    title: 'Razão e Proporção',
    slug: 'RAZAO E PROPORCAO',
    videos: [
      { id: 'evXrGaI6SVc', title: 'Razão e Proporção - Aula 1' },
      { id: 'uIulBEk8gcM', title: 'Razão e Proporção - Aula 2' },
      { id: '6Dsta1eZ1BA', title: 'Razão e Proporção - Aula 3' },
    ],
  },
  {
    title: 'Regra de 3',
    slug: 'REGRA DE 3',
    videos: [
      { id: 'alLifth7gxE', title: 'Regra de 3 - Aula 1' },
      { id: 'buYey1YGJhA', title: 'Regra de 3 - Aula 2' },
      { id: 'xuQgQTiD3mw', title: 'Regra de 3 - Aula 3' },
    ],
  },
  {
    title: 'Porcentagem',
    slug: 'PORCENTAGEM',
    videos: [
      { id: 'CERiIwParX4', title: 'Porcentagem - Aula 1' },
      { id: 'azedx0uou64', title: 'Porcentagem - Aula 2' },
      { id: '3EefFSEF8Ds', title: 'Porcentagem - Aula 3' },
    ],
  },
  {
    title: 'Fração',
    slug: 'FRACAO',
    videos: [
      { id: 'YJyY6A_MOQc', title: 'Fração - Aula 1' },
      { id: 'SgJpB78R7x0', title: 'Fração - Aula 2' },
      { id: 'BWFnqKYxgMo', title: 'Fração - Aula 3' },
    ],
  },
];

export default function VideoAulasPage() {
  const [openSection, setOpenSection] = useState(null);

  const toggle = (title) => {
    setOpenSection(openSection === title ? null : title);
  };

  return (
    <div className="video-aulas-page">
      {groups.map((group) => {
        const isOpen = openSection === group.title;
        return (
          <section
            className={`va-section ${isOpen ? 'va-section--open' : ''}`}
            key={group.title}
          >
            <button
              type="button"
              className="va-header"
              onClick={() => toggle(group.title)}
              aria-expanded={isOpen}
            >
              <span className="va-header-title">{group.title}</span>
              <span className="va-header-arrow">{isOpen ? '▲' : '▼'}</span>
            </button>

            {isOpen && (
              <div className="va-body">
                <div className="va-grid">
                  {group.videos.map((video) => (
                    <div className="va-video-card" key={video.id}>
                      <div className="va-video-wrapper">
                        <iframe
                          src={`https://www.youtube.com/embed/${video.id}`}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  className="va-questions-link"
                  to={`/temas?tema=${encodeURIComponent(group.slug)}`}
                >
                  clique aqui para abrir todas as questões desse tema
                </Link>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
