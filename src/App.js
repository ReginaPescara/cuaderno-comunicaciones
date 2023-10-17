import React from 'react';
import './App.css';
<<<<<<< HEAD

import Signin from "./pages/Signin";
import Registrarse from './Componentes/Registrarse'
import FondoDePantalla from './Componentes/FondoPantalla';

function App(){
  return(
    
      <Signin></Signin>
   
=======
import { AuthProvider } from './context/authContext';
import RegistrarseAlumno from './Componentes/Registros/RegistrarseAlumno';
import RegistrarsePadres from './Componentes/Registros/RegistrarsePadres';
import RegistrarsePreceptor from './Componentes/Registros/RegistrasePreceptor';
import LoginAlumno from './Componentes/InicioSesion/LoginAlumno';

function App(){
  return(
    <AuthProvider>
      <div className="App">
        <LoginAlumno></LoginAlumno>
      </div>
    </AuthProvider>
>>>>>>> 255db2497b3b31cf7bad748df01f2ecd9f2e21ef
  )
import RegistrarseAlumno from './Componentes/Registros/RegistrarseAlumno';
import RegistrarsePadres from './Componentes/Registros/RegistrarsePadres';
import RegistrarsePreceptor from './Componentes/Registros/RegistrasePreceptor';
  }

  