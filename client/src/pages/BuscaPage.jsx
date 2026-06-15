import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../services/api';
import QuestionCard from '../components/QuestionCard';
import './BuscaPage.css';

export default function BuscaPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 10;
  const [error, setError] = useState('');

  useEffect(() => {
    setPage(1);
  }, [query]);

  useEffect(() => {
    if (!query) {
      setItems([]);
      return;
    }

    async function loadSearchItems() {
      setLoading(true);
      setError('');
      try {
        const response = await api.get('/busca/questoes-tema/busca', {
          params: { palavra: query, page, limit }
        });
        setItems(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        console.error(err);
        setError('Erro ao buscar questões. Tente novamente mais tarde.');
        setItems([]);
      } finally {
        setLoading(false);
      }
    }
    loadSearchItems();
  }, [query, page, limit]);

  return (
    <div className="busca-page">
      <section className="busca-header">
        <h1>Resultados da Busca</h1>
        <p>Procurando por: <strong>"{query}"</strong></p>
      </section>

      <section className="busca-items" aria-label="Resultados da pesquisa">
        {loading ? (
          <p className="status-text">Buscando questões...</p>
        ) : error ? (
          <p className="status-error">{error}</p>
        ) : (
          <>
            {items.length === 0 && query && (
              <p className="status-text">Nenhuma questão encontrada contendo "{query}".</p>
            )}
            {items.map((item, index) => (
              <QuestionCard key={`${item.idq || item.idQ || index}-${page}`} question={item} />
            ))}
            {items.length > 0 && (
              <div className="pagination-controls">
                <button type="button" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>Anterior</button>
                <span>Página {page}</span>
                <button type="button" onClick={() => setPage((p) => p + 1)} disabled={items.length < limit}>Próxima</button>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}
