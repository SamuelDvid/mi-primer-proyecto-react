import React from 'react'
import './styles/PrimerComponente.css'; 

const string = "Esto es un texto";
const number = 4;
const boolean = true;
const array = ["hola", "ponte a estudiar ", 4, true];
const funcion = () => 3+6+9;
const fecha = new Date;
const objeto = {nombre: " Samuel ", edad: 40, stack: " html, css, javascript, react ", experiencia: 5}
export const PrimerComponente = () => {
  return (
    <>
         <h1>Variables en JSX</h1>
         <h2>Variables tipo String: </h2><p>{string}</p>
         <h1>Variables tipo Number: </h1><p>{number}</p>
         <h1>Variables tipo Array: </h1><p>{array}</p>
         <h1>Variables tipo Funcion: </h1><p>{funcion()}</p>
    </>
   
  )
}

export default PrimerComponente