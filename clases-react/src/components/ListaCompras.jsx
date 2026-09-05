import { useState } from "react";

export default function ListaCompras() {
  const [items, setItems] = useState([]);
  const [nuevoTexto, setNuevoTexto] = useState("");

  const agregarItem = () => {
    if (nuevoTexto.trim() === "") return;
    setItems([...items, { id: Date.now(), texto: nuevoTexto, comprado: false }]);
    setNuevoTexto("");
  };

  const toggleComprado = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, comprado: !item.comprado } : item
      )
    );
  };

  const eliminarItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const faltantes = items.filter((item) => !item.comprado).length;

  return (
    <div>
      <h2>Lista de Compras</h2>
      <div>
        <input
          type="text"
          value={nuevoTexto}
          onChange={(e) => setNuevoTexto(e.target.value)}
          placeholder="Agregar ítem..."
        />
        <button onClick={agregarItem}>Agregar</button>
      </div>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.comprado}
              onChange={() => toggleComprado(item.id)}
            />
            <span>{item.texto}</span>
            <button onClick={() => eliminarItem(item.id)}>✕</button>
          </li>
        ))}
      </ul>

      <p>Faltan comprar: {faltantes}</p>
    </div>
  );
}