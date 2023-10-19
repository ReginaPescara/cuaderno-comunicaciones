import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { AuthProvider } from './context/authContext';
import RegistrarseAlumno from './Componentes/Registros/RegistrarseAlumno';
import LoginAlumno from './Componentes/InicioSesion/LoginAlumno';

function App(){
  return(
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<RegistrarseAlumno/>}/>
          <Route path="/LoginAlumno" element={<LoginAlumno/>}/>
        </Routes>
    </AuthProvider>
    </Router>
  )
  }
export default App;