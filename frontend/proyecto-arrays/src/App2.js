import logo from './logo.svg';
import './App.css';

function App() {

  const miArray=()=>{
    const numerosArray=[
      {id:1, numero:15},
      {id:2, numero:37},
      {id:3, numero:26},
      {id:4, numero:95},
      {id:5, numero:81}
      ]
    
    return(

      <p>{numerosArray.map((item)=>{

        return<span key={item.id}>{item.id} &nbsp;{item.numero} &nbsp;</span>

      })}</p>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Numeros de Array</h1>
        {miArray()}
      </header>
    </div>
  );
}

export default App;
