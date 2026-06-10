import { useState, useCallback, memo } from 'react';

interface BotaoOtimizadoProps {
  handleClick: () => void;
}

const BotaoOtimizado = memo(({ handleClick }: BotaoOtimizadoProps) => {
  console.log('Botão Otimizado renderizou!');
  return <button onClick={handleClick}>Incrementar (Otimizado)</button>;
});

BotaoOtimizado.displayName = 'BotaoOtimizado';

export function BotaoCallback() {
  const [count, setCount] = useState(0);

  const incrementar = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div className="card-hook">
      <h3>3. useCallback</h3>
      <p>Contador: {count}</p>
      <BotaoOtimizado handleClick={incrementar} />
      <p className="legenda">*Abra o console para ver o efeito do useCallback ao interagir.</p>
    </div>
  );
}