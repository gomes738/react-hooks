import { useState } from 'react';
import type { FormEvent } from 'react';
import { useAuth } from './hooks/useAuth';
import { useOnlineStatus } from './hooks/useOnlineStatus';

import { ContadorState } from './components/ContadorState';
import { UsuarioPerfilEffect } from './components/UsuarioPerfilEffect';
import { BotaoCallback } from './components/BotaoCallback';
import { FocarInputRef } from './components/FocarInputRef';
import { ContadorComplexoReducer } from './components/ContadorComplexoReducer';
import { FiltroNumerosMemo } from './components/FiltroNumerosMemo';
import { ComponenteContexto } from './components/ComponenteContexto';
import './App.css';

function PainelHooks() {
  const isOnline = useOnlineStatus();

  return (
    <div className="painel-container">
      <header className="status-header">
        <h1>Laboratório Prático de Hooks (TS)</h1>
        <span className={`status-badge ${isOnline ? 'online' : 'offline'}`}>
          <span className="dot">●</span> {isOnline ? 'Conectado' : 'Sem Internet'}
        </span>
      </header>

      <div className="grid-hooks">
        <ContadorState />
        <UsuarioPerfilEffect />
        <BotaoCallback />
        <FocarInputRef />
        <ContadorComplexoReducer />
        <FiltroNumerosMemo />
        <ComponenteContexto />
      </div>
    </div>
  );
}

function LoginTela() {
  const { login } = useAuth();
  const [nome, setNome] = useState('');

  const lidarLogin = (e: FormEvent) => {
    e.preventDefault();
    if (!nome.trim()) return;
    
    // O TS agora valida se a estrutura bate com a nossa interface 'User'
    login({ 
      name: nome, 
      email: `${nome.toLowerCase().replace(/\s/g, '')}@email.com` 
    });
  };

  return (
    <div className="login-box">
      <h2>Entrar no Laboratório</h2>
      <p>Insira seu nome para iniciar e ativar o Contexto Global.</p>
      <form onSubmit={lidarLogin}>
        <input 
          type="text" 
          value={nome} 
          onChange={e => setNome(e.target.value)} 
          placeholder="Seu nome" 
          required 
        />
        <button type="submit">Acessar App</button>
      </form>
    </div>
  );
}

export default function App() {
  const { isLoggedIn } = useAuth() as { isLoggedIn: boolean };
  return isLoggedIn ? <PainelHooks /> : <LoginTela />;
}