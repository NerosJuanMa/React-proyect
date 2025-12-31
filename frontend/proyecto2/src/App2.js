import './App.css';
import React, { useState } from 'react';

function App() {

    //Definir el estado para almacenar el resultado de la suma
    const [resultado, setResultado]= useState(null);

 const elemento=<h1 className='centrar'>Hola alumnos</h1>
//  const elemento2=<h2>{suma(5,7)}{/*El codigo JS siempre debe ir entre llaves*/}</h2>

 const botonPulsado=()=>{
    const result=suma(5,7);
    setResultado(result);
 }

 return <div>
    <button onClick={botonPulsado} style={{marginTop: "10px", marginLeft: "10px"}}>Pulsame</button>
    <div>{elemento}</div>
    <div>{resultado!=null && <h2>El resultado es: {resultado}</h2>}</div>
 </div>
}

const botonPulsado=()=>{
  alert(suma(5,7));
}

function suma(a,b){
  return a+b;
}
export default App;
