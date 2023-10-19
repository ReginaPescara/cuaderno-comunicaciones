import React from 'react';
import './App.css';
import { AuthProvider } from './context/authContext';
import RegistrarseAlumno from './Componentes/Registros/RegistrarseAlumno';
import RegistrarsePadres from './Componentes/Registros/RegistrarsePadres';
import RegistrarsePreceptor from './Componentes/Registros/RegistrasePreceptor';
import LoginAlumno from './Componentes/InicioSesion/LoginAlumno';
import CardsMenu from './Componentes/home/CardsMenu';
  
function App(){
  return(
    <AuthProvider>
      <div className="App">
        <CardsMenu><LoginAlumno></LoginAlumno></CardsMenu>
      </div>
    </AuthProvider>
  )  
  } 

export default App;