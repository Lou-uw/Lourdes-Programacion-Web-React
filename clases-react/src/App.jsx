import Acordeon from "./components/Acordeon";
import Buscador from "./components/Buscador";
import ListaCompras from "./components/ListaCompras";
import Contador from "./components/Contador";
import "./App.css";
import TarjetaPelicula from "./components/TarjetaPelicula";
import Perfil from "./components/Perfil";
import Reloj from "./components/Reloj";
import ClicksYRenders from "./components/ClicksYRenders";
import Ficha from "./components/Ficha";
import { useState } from "react";

const peliculas = [
  { id: 1, titulo: "Interstellar", año: 2014, vista: false },
  { id: 2, titulo: "The Dark Knight", año: 2008, vista: true },
  { id: 3, titulo: "Inception", año: 2010, vista: false },
  { id: 4, titulo: "Oppenheimer", año: 2023, vista: true },
];

function App() {   
  const [mostrarReloj, setMostrarReloj] = useState(true); 
  return (
    <>
    <div>
        <button onClick={() => setMostrarReloj(!mostrarReloj)}>
          {mostrarReloj ? "Esconder Reloj" : "Mostrar Reloj"}
        </button>
        {mostrarReloj && <Reloj />}
      </div>
     <Contador />
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
    
      <Acordeon titulo="Título de prueba" contenido="Contenido blablabla..." />
      <Buscador/>
      <ListaCompras/>
       <div>
      <h2>Clase 11 - Ejercicio 2</h2>
      <ClicksYRenders />

      <h2>Clase 11 - Ejercicio 3</h2>
      <Ficha nombre="Sam" rol="Diseñador" />
      <Ficha nombre="Alba" rol="Programadora" />
      <h3>Clase 11 - Ejercicio 4</h3>
      <ContadorDeVisitas />
      <ContadorDeCafes />
    </div>
    </>
  );
}

export default App;