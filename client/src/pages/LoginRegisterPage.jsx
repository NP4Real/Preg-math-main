import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { authApi } from '../services/api';
import './LoginRegisterPage.css';

export default function LoginRegisterPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('pregmath_theme') === 'dark');
  const { login, loginAsGuest } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';
    localStorage.setItem('pregmath_theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await authApi.login(formData.email, formData.password);
      const { token, user } = response.data;
      login(user, token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.mensagem || 'Erro ao processar requisição');
    } finally {
      setLoading(false);
    }
  };

  const handleGuestLogin = () => {
    loginAsGuest();
    navigate('/');
  };

  return (
    <div className="login-page">
      {/* Topbar */}
      <header className="login-topbar">
        <div className="login-brand-group">
          <div className="login-brand-mark">
            <span>Preg</span>
            <strong>Math</strong>
          </div>
          <button
            type="button"
            className="login-theme-toggle"
            aria-label="Alternar tema claro e escuro"
            aria-pressed={darkMode}
            onClick={() => setDarkMode((v) => !v)}
          >
            <span />
          </button>
        </div>
      </header>

      {/* Conteúdo central */}
      <main className="login-content">
        <div className="login-card">
          <h1>Olá, seja bem vindo!</h1>
          <p className="login-subtitle">entre na sua conta</p>

          {error && <div className="login-error">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="login-field">
              <span className="login-field-icon">✉</span>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={loading}
              />
            </div>

            <div className="login-field">
              <span className="login-field-icon">🔑</span>
              <input
                type="password"
                name="password"
                placeholder="Senha"
                value={formData.password}
                onChange={handleInputChange}
                required
                disabled={loading}
              />
            </div>

            <button type="submit" className="login-submit-btn" disabled={loading}>
              {loading ? 'Entrando...' : 'fazer login'}
            </button>
          </form>

          <button
            type="button"
            className="login-guest-btn"
            onClick={handleGuestLogin}
          >
            entrar como visitante
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="login-footer">
        <p>© 2026 SESI Vinhedo - CE 242. Todos os direitos reservados.</p>
        <p>Desenvolvido por alunos da Instituição SESI Vinhedo-Ce242.</p>
      </footer>
    </div>
  );
}
