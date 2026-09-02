import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import TarjetaPelicula from "./components/TarjetaPelicula";
import Perfil from "./components/Perfil";

const peliculas = [
  { id: 1, titulo: "Interstellar", año: 2014, vista: false },
  { id: 2, titulo: "The Dark Knight", año: 2008, vista: true },
  { id: 3, titulo: "Inception", año: 2010, vista: false },
  { id: 4, titulo: "Oppenheimer", año: 2023, vista: true },
];

function App() {
  const [cuenta, setCuenta] = useState(0);

  return (
    <>
      <h2>Contador:</h2>
      <div>
        <p>{cuenta}</p>
        <button onClick={() => setCuenta(cuenta + 1)}>Sumar</button>
        <button onClick={() => setCuenta(cuenta - 1)}>restar</button>
        <button onClick={() => setCuenta((0))}>reiniciar</button>
      </div>

      <Perfil
        nombre="Lourdes"
        rol="Estudiante"
        lenguajes={["JavaScript", "Java", "Python"]}
      />

      {peliculas.map((pelicula) => (
        <TarjetaPelicula
          key={pelicula.id}
          titulo={pelicula.titulo}
          año={pelicula.año}
          vista={pelicula.vista}
        />
      ))}
    </>
  );
}

export default App;