
import './App.css';
import {useRef, useState, useEffect} from 'react';


function App() {
  const [valorCambio, setValorCambio]=useState(null);
  const euroRef=useRef();
  const resultadoRef=useRef();

  useEffect(()=>{

      const llamaApiCambio=async()=>{
        try {
          const respuesta=await fetch("https://v6.exchangerate-api.com/v6/62f26a3ef4ada72e2ed6943e/latest/EUR")
          const datos=await respuesta.json();

          console.log(datos);
          setValorCambio(datos.conversion_rates.USD);

        } catch (error) {
          console.error("Error al acceder a la API: ", error);
          
        }
      };

      llamaApiCambio();

    },[]
  );

  const calcular= ()=>{
    const eurosValor=parseFloat(euroRef.current.value);
    const dolares= eurosValor * valorCambio;

    resultadoRef.current.innerHTML=dolares.toFixed(2) + " $";
  }
      
      

return( 
<div className='centrar'>
  <h1>Conversor Euro / Dolar</h1>  
  <input className='centrar'type='text' ref={euroRef}></input><br></br>
  <button className='centrar' onClick={calcular}>Convertir</button><br></br>
  
  <div className='centrar resultado' ref={resultadoRef}></div>
</div>
);  
}


export default App;
