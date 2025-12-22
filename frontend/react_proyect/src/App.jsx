import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/header.jsx"
import Home  from './pages/home.jsx'

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
