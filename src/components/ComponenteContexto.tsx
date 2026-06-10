import { useAuth } from '../hooks/useAuth';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

type AuthContextValue = {
  user?: {
    name?: string;
    email?: string;
  };
  logout: () => void;
};

export function ComponenteContexto() {
  const { user, logout } = useAuth() as AuthContextValue;
  const isOnline = useOnlineStatus();

  return (
    <div className="card-hookDestaque">
      <h3>7 e 8. useContext & Custom Hooks</h3>
      {/* O TS sabe que o 'user' pode vir do contexto, garantindo tipagem segura */}
      <p>Olá, <strong>{user?.name || 'Usuário'}</strong>! Você está lendo dados de um Contexto Global.</p>
      <p>E-mail: {user?.email}</p>
      <p>
        Status da Internet: {' '}
        <span style={{ 
          color: isOnline ? 'var(--success)' : 'var(--danger)', 
          fontWeight: 'bold',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          ● {isOnline ? 'Online (Conectado)' : 'Offline (Sem Conexão)'}
        </span>
      </p>
      <button onClick={logout} className="btn-logout">Sair do Sistema</button>
    </div>
  );
}