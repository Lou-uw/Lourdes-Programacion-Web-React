/*import { useState, useEffect } from "react";

export default function ContadorDeVisitas() {
  const [cuenta, setCuenta] = useState(() => {
    return Number(localStorage.getItem("visitas")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("visitas", String(cuenta));
  }, [cuenta]);

  return (
    <div>
      <h3>Visitas</h3>
      <p>{cuenta}</p>
      <button onClick={() => setCuenta(cuenta + 1)}>Sumar visita</button>
    </div>
  );
}*/
import useContadorGuardado from "../hooks/useContadorGuardado";

export default function ContadorDeVisitas() {
  const [cuenta, sumar] = useContadorGuardado("visitas");

  return (
    <div>
      <h3>Visitas</h3>
      <p>{cuenta}</p>
      <button onClick={sumar}>Sumar visita</button>
    </div>
  );
}