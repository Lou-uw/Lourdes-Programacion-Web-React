export default function Perfil(props){
    const {nombre, rol, lenguajes} = props;

    return (
     <>
      <h1>Mi nombre es: {nombre}</h1>
      <h2>Rol: {rol}</h2>
      <h3>Lenguajes para aprender:</h3>
        {lenguajes.map((lenguaje, index) => (
          <div key={index}>
            <p>{lenguaje}</p>
          </div>
        ))}
     </>
  )
}