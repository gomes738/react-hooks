import { useContext } from 'react';
// @ts-ignore: module has no declaration file
import { AuthContext } from '../context/AuthContext';

export function useAuth() {
  const context = useContext(AuthContext);
  // O TypeScript nos obriga a fazer essa checagem, o que valida a nossa boa prática!
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}