import { useState } from 'react';

export default function Contador() {
  const [cuenta, setCuenta] = useState(0);
  return (
    <>
      <h2>Contador:</h2>
      <div>
        <p>{cuenta}</p>
        <button onClick={() => setCuenta(cuenta + 1)}>Sumar</button>
        <button onClick={() => { if (cuenta > 0) setCuenta(cuenta - 1); }}>
          Restar
        </button>
        <button onClick={() => setCuenta(0)}>Reiniciar</button>
      </div>
    </>
  );
}
