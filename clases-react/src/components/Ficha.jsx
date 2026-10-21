import { useState } from "react";

export default function Ficha({ nombre, rol }) {
  const [favorito, setFavorito] = useState(false);

  return (
    <div>
      <h3>{nombre}</h3>
      <p>{rol}</p>
      <button onClick={() => setFavorito(!favorito)}>
        {favorito ? "★ Favorito" : "☆ Marcar favorito"}
      </button>
    </div>
  );
}