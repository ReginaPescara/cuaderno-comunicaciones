import React from 'react';
import './App.css';
import Signin from "./pages/Signin";
import Registrarse from './Componentes/Registrarse'
import FondoDePantalla from './Componentes/FondoPantalla';

function App(){
  return(
    <FondoDePantalla>
      <Signin></Signin>
    </FondoDePantalla>
  )
  }
export default App;