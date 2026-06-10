import { useState, useMemo } from 'react';
import type { ChangeEvent } from 'react';

export function FiltroNumerosMemo() {
  const [numeros] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [termoBusca, setTermoBusca] = useState('');

  const numerosParesFiltrados = useMemo<number[]>(() => {
    console.log('useMemo: Calculando números pares...');
    return numeros.filter(num => num % 2 === 0);
  }, [numeros]);

  return (
    <div className="card-hook">
      <h3>6. useMemo</h3>
      <input 
        value={termoBusca} 
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTermoBusca(e.target.value)} 
        placeholder="Digite algo para forçar render..." 
      />
      <p>Lista Memorizada (Pares): {numerosParesFiltrados.join(', ')}</p>
      <p className="legenda">*O cálculo não roda novamente ao digitar no input acima.</p>
    </div>
  );
}