import { useState, useEffect } from "react";

export default function Reloj() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalo = setInterval(() => {
      console.log("tic");
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(intervalo);
    };
  }, []);

  return (
    <div>
      <h2>Hora actual: {hora}</h2>
    </div>
  );
}