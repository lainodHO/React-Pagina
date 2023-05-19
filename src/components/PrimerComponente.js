import React, {useState}from 'react'

export const PrimerComponente = () => {
    //let nombre="Daniel h";
    let web="Danielweb.es";

        const [nombre, setNombre] = useState("Daniel");
    let cursos =["1XD","2XD","3XD","4XD","5XD"];

    const cambiarNombre =(nuevoNombre)=>{
        setNombre(nuevoNombre);
    }
  return (
    <div>
        <h1>Mi primer componente</h1>
        <p>Este es un texto en mi componente</p>
        <p>Mi nombre es:<strong className={nombre.length >= 4 ? 'verde' : 'rojo'}> {nombre}</strong></p>
        <p>Mi Web es: {web}</p>

        <input type="text" onChange={e => cambiarNombre(e.target.value)} placeholder/>

        <button on onClick={e=> {
                console.log("El valor guardado en tu estado es: ", nombre);
        }}>Mostrar valor de estado </button>

        <button onClick={e => cambiarNombre("Danielito")}>
        Cambiar Nombre
        </button>
        <h2>Cusos: </h2>
        <ul>
        {
           cursos .map((curso, indice )=>{
            return (<li key ={indice}>
                {curso}
            </li>);
           })
        }
        </ul>
    </div>
  )
}
