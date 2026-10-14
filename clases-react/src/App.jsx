
import "./App.css";
import TarjetaPelicula from "./components/TarjetaPelicula";
import Perfil from "./components/Perfil";
import Acordeon from "./components/Acordeon";
import Buscador from "./components/Buscador";
import ListaCompras from "./components/ListaCompras";
import Contador from "./components/Contador";

const peliculas = [
  { id: 1, titulo: "Interstellar", año: 2014, vista: false },
  { id: 2, titulo: "The Dark Knight", año: 2008, vista: true },
  { id: 3, titulo: "Inception", año: 2010, vista: false },
  { id: 4, titulo: "Oppenheimer", año: 2023, vista: true },
];

function App() {    
  return (
    <>
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
    </>
  );
}

export default App;