import { createContext, useState, useMemo } from 'react';
import type { ReactNode } from 'react';

// Definimos o formato dos dados do usuário
export interface User {
  name: string;
  email: string;
}

// Definimos o formato do que o contexto vai entregar
interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

// Iniciamos o contexto podendo ser undefined antes do Provider ser montado
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => setUser(userData);
  const logout = () => setUser(null);

  const value = useMemo(() => ({
    user,
    isLoggedIn: !!user,
    login,
    logout
  }), [user]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}