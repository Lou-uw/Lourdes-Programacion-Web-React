export default function Persona(props){
    const {nombre, rol, lenguajes} = props;

    return (
     <>
      <h1>Mi nombre es: {nombre}</h1>
      <h2>Rol: {rol}</h2>
      <h3>Lenguajes para aprender:</h3>
      <ul>
        <li>{lenguajes[0]}</li>
        <li>{lenguajes[1]}</li>
        <li>{lenguajes[2]}</li>
      </ul>
     </>
  )
}