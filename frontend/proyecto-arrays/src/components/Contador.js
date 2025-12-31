import React, {useState} from "react";

const Contador=()=>{

    const [cuenta, setContador]=useState(1)

    const incrementar=()=>{
      setContador(cuenta+1);
    };
    const decrementar=()=>{
      setContador(cuenta-1);
    };

    return(
      <>
      <button className="buttonContador" onClick={decrementar}>-</button>
      <input type="text" value={cuenta} size="2" style={{textAlign:"center"}}></input>
      <button className="buttonContador" onClick={incrementar}>+</button>
      </>
    );
}



export default Contador;