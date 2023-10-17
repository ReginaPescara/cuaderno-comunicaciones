import React from 'react';
import './App.css';
import { AuthProvider } from './context/authContext';
import RegistrarseAlumno from './Componentes/Registros/RegistrarseAlumno';
import RegistrarsePadres from './Componentes/Registros/RegistrarsePadres';
import RegistrarsePreceptor from './Componentes/Registros/RegistrasePreceptor';

function App(){
  return(
    <AuthProvider>
      <div className="App">
        <RegistrarseAlumno></RegistrarseAlumno>
      </div>
    </AuthProvider>
  )
  }
export default App;