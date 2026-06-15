import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext, AuthProvider } from './contexts/AuthContext';
import Topbar from './components/Topbar';
import HomePage from './pages/HomePage';
import SimuladoPage from './pages/SimuladoPage';
import VideoAulasPage from './pages/VideoAulasPage';
import ThemePage from './pages/ThemePage';
import BuscaPage from './pages/BuscaPage';
import LoginRegisterPage from './pages/LoginRegisterPage';
import './App.css';

function ProtectedRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function AppRoutes() {
  const { user } = useContext(AuthContext);

  return (
    <div className="app-container">
      {user && <Topbar />}
      <main className="app-main">
        <Routes>
          <Route path="/login" element={<LoginRegisterPage />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/simulado"
            element={
              <ProtectedRoute>
                <SimuladoPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/video-aulas"
            element={
              <ProtectedRoute>
                <VideoAulasPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/temas"
            element={
              <ProtectedRoute>
                <ThemePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/busca"
            element={
              <ProtectedRoute>
                <BuscaPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to={user ? '/' : '/login'} replace />} />
        </Routes>
      </main>
      {user && (
        <footer className="site-footer">
          <p>© 2026 SESI Vinhedo - CE 242. Todos os direitos reservados.</p>
          <p>Desenvolvido por alunos da Instituição SESI Vinhedo-Ce242.</p>
        </footer>
      )}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
