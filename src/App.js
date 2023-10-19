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
import MenuPrincipal from './Componentes/MenuPrincipal';
import CardsMenu from './Componentes/home/CardsMenu';

function App(){
  return(
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<CardsMenu/>}/>
          <Route path="/RegistroAlumno" element={<RegistrarseAlumno/>}/>
          <Route path="/LoginAlumno" element={<LoginAlumno/>}/>
          <Route path="/LoginAlumno/MenuPrincipal" element={<MenuPrincipal/>}/>
        </Routes>
    </AuthProvider>
    </Router>
  )
  }
export default App;