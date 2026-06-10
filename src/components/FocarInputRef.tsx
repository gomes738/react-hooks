import { useRef } from 'react';

export function FocarInputRef() {
  const inputRef = useRef<HTMLInputElement>(null);

  const darFoco = () => {
    // O operador '?' garante que só chamará o focus se o inputRef.current não for nulo
    inputRef.current?.focus();
  };

  return (
    <div className="card-hook">
      <h3>4. useRef</h3>
      <input ref={inputRef} type="text" placeholder="Digite algo aqui..." />
      <button onClick={darFoco} style={{ marginLeft: '10px' }}>Focar no Input</button>
    </div>
  );
}