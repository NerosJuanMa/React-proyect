import logo from './logo.svg';
import './App.css';
import PropTypes, { string } from "prop-types";

function App() {

  const usuario= {
    nombre:"Juan",
    apellido:"Diaz",
    edad: 18,
    genero: "masculino"
  }

  return (
    <>
    <Saludo usuario= {usuario}></Saludo>
    
    </>
  );
}

function Saludo(props){
  return (<>
  <h1>Hola {props.usuario.nombre} {props.usuario.apellido} !!</h1>
  <p> edad: <strong>{props.usuario.edad}</strong> años</p>
  <p> y tu genero es: <strong>{props.usuario.genero}</strong></p>
  </>);
}

Saludo.propTypes={
  usuario:PropTypes.shape(
    {
      nombre:PropTypes.string.isRequired,
      edad:PropTypes.number.isRequired
    }
  ).isRequired
}

export default App;
