import { useState, useEffect } from "react";

export default function useContadorGuardado(clave) {
  const [cuenta, setCuenta] = useState(() => {
    return Number(localStorage.getItem(clave)) || 0;
  });

  useEffect(() => {
    localStorage.setItem(clave, String(cuenta));
  }, [clave, cuenta]);

  const sumar = () => setCuenta((c) => c + 1);

  return [cuenta, sumar];
}