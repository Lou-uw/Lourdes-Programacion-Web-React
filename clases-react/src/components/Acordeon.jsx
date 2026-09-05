import { useState } from "react";

export default function Acordeon({ titulo, contenido }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <div>
      <button onClick={() => setAbierto(!abierto)}>
        {titulo} {abierto ? "▲" : "▼"}
      </button>

      {abierto && (
        <div>
          <p>{contenido}</p>
        </div>
      )}
    </div>
  );
}