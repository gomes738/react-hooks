import { useState, useEffect } from 'react';

interface GitHubUser {
  name: string;
  bio: string;
}

export function UsuarioPerfilEffect() {
  const [user, setUser] = useState<GitHubUser | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/users/github')
      .then(res => res.json())
      .then((data: GitHubUser) => setUser(data));
  }, []);

  return (
    <div className="card-hook">
      <h3>2. useEffect</h3>
      {user ? (
        <div>
          <p><strong>Nome da API:</strong> {user.name}</p>
          <p><strong>Bio:</strong> {user.bio}</p>
        </div>
      ) : <p>Carregando dados da API...</p>}
    </div>
  );
}