import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header.jsx"
import Home  from './pages/Home.jsx'

function App() {
  return (
    <>
    <Header/>
    <Home/>
    <h1>Hola React 🚀</h1>

    </>    
  )
}

export default App
