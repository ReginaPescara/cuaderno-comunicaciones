import React from 'react';
import './App.css';
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

  )  

  }  