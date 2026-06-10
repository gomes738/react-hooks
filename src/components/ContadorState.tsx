import { useState } from 'react';

export function ContadorState() {
  // O TS infere automaticamente que 'count' é um number baseado no valor inicial 0
  const [count, setCount] = useState(0);

  return (
    <div className="card-hook">
      <h3>1. useState</h3>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>Clique aqui</button>
    </div>
  );
}