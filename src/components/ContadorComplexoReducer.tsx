import { useReducer } from 'react';

interface ReducerState {
  contador: number;
}

// Usamos uma Union Type para restringir estritamente quais ações o reducer aceita
type ReducerAction = 
  | { type: 'INCREMENTAR' }
  | { type: 'DECREMENTAR' };

const reducer = (state: ReducerState, action: ReducerAction): ReducerState => {
  switch (action.type) {
    case 'INCREMENTAR': return { contador: state.contador + 1 };
    case 'DECREMENTAR': return { contador: state.contador - 1 };
    default: return state;
  }
};

export function ContadorComplexoReducer() {
  const [state, dispatch] = useReducer(reducer, { contador: 0 });

  return (
    <div className="card-hook">
      <h3>5. useReducer</h3>
      <p>Quantidade no Estado: {state.contador}</p>
      <button onClick={() => dispatch({ type: 'INCREMENTAR' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENTAR' })} style={{ marginLeft: '10px' }}>-</button>
    </div>
  );
}