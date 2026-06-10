import { useState, useEffect, useContext } from 'react';
// @ts-ignore: module has no declaration file
import { AuthContext } from '../context/AuthContext';

export function useOnlineStatus(): boolean {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useOnlineStatus deve ser usado dentro de um AuthProvider');
  }

  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      console.log('useOnlineStatus: Conectado à Internet! (Online)');
      setIsOnline(true);
    };
    const handleOffline = () => {
      console.log('useOnlineStatus: Conexão perdida! (Offline)');
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}
