import React from 'react';
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import {useAuth} from "../../context/authContext";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


import { collection, addDoc, orderBy, getDocs, query} from "firebase/firestore";
import {db} from '../../firebase';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [agreed, setAgreed] = useState(false)
  const [curso, setCurso] = useState('');

  const [registroExitoso, setRegistroExitoso] = useState(false);


  const [division, setDivision] = useState('');

  const [fechaNacimiento, setFechaNacimiento] = useState('');

  const [dni, setDni] = useState('');

  const [direccion, setDireccion] = useState('');

  const auth = useAuth()

  const [shown, setShown] = React.useState(false);
  const switchShown = () => setShown(!shown);

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  const [password, setPassword] = React.useState('');
  const onChange = ({ currentTarget }) => setPassword(currentTarget.value);

  const [emailRegister, setEmailRegister] = useState("")
  const [passwordRegister, setPasswordRegister] = useState("")


  const handleFechaNacimientoChange = (event) => {
    setFechaNacimiento(event.target.value);
  };

  const handleCursoChange = (event) => {
    setCurso(event.target.value);
    // Restablece la división cuando se cambia el curso para evitar inconsistencias
    setDivision('');
  };

  const handleDivisionChange = (event) => {
    setDivision(event.target.value);
  };

  const handleDireccionChange = (event) => {
    setDireccion(event.target.value);
  }

  const handleDniChange = (event) => {
    setDni(event.target.value);
  }

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };
  
  const handleApellidoChange = (e) => {
    setApellido(e.target.value);
  };

  const navigate = useNavigate();



  const checkUserAuth = async () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // El usuario está autenticado, resuelve la promesa
          resolve(user);
        } else {
          // El usuario no está autenticado, rechaza la promesa
          reject('Usuario no autenticado.');
        }
        // No olvides desuscribirte para evitar fugas de memoria
        unsubscribe();
      });
    });
  };


  const handleRegister = async (e, onClose, user) => {
    e.preventDefault();
    console.log(nombre);
    console.log(apellido);
    const alumnoData = {
      nombre: nombre,
      apellido: apellido,
      fecha: fechaNacimiento,
      dni: dni,
      direccion: direccion,
      Curso: division, 
    };
    try {
      // Agrega el documento del alumno a la colección "alumnos"
      const docRef = await addDoc(collection(db, 'alumnos'), alumnoData);
  
      console.log(docRef);
      console.log('Alumno registrado con ID: ', docRef.id);
      auth.register(emailRegister, passwordRegister);
      const querySnapshot = await getDocs(
        query(collection(db, 'alumnos'), orderBy('nombre'))
      );

      querySnapshot.forEach((doc) => {
        // Accede a los datos de cada documento ordenado por el campo "nombre"
        console.log(doc.id, " => ", doc.data());
      });

      setRegistroExitoso(true);

      Swal.fire({
        icon: 'success',
        title: '¡Registro exitoso!',
        text: 'Bienvenido a nuestra aplicación.',
        timer: 3000,
        showConfirmButton: false,
        willClose: () => {
          navigate('/MenuPrincipal');
        }
      });

    } catch (error) {
      console.error('Error al registrar el alumno: ', error);
    }
  };




  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bienvenido Alumno Registrese!</h2>
      </div>
      <form onSubmit={handleRegister} action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

          {/* Nombre del alumno */}
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Nombre
            </label>
            <div className="mt-2.5">
              <input
              required
              value={nombre}
              onChange={handleNombreChange}
                type="text"
                name="nombre"
                id="nombre"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* Apellido del alumno */}
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Apellido
            </label>
            <div className="mt-2.5">
              <input
              required
              value={apellido}
              onChange={handleApellidoChange}
              type="text"
                name="apellido"
                id="apellido"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* Dni del alumno */}
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              D.N.I
            </label>
            <div className="mt-2.5">
              <input
              required
                value={dni}
                onChange={handleDniChange}
                type="text"
                name="dni"
                id="dni"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* Fecha del alumno*/}
          <div>
          <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">Fecha de Nacimiento</label>
          <div className="mt-2.5">
          <input
          type="date"
          value={fechaNacimiento}
          onChange={handleFechaNacimientoChange}
          className="block text-sm font-semibold leading-6 text-gray-900"
          />
          </div>
          </div>

          {/* Division del Alumno */}
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Direccion
            </label>
            <div className="mt-2.5">
              <input
              required
                value={direccion}
                onChange={handleDireccionChange}
                type="text"
                name="direccion"
                id="direccion"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* Curso y Division del Alumno */}
          <div>
            <select required value={curso} onChange={handleCursoChange} className="block text-sm font-semibold leading-6 text-gray-900">
            <option value="" disabled>Curso</option>
            <option value="1ro">Primer Año</option>
            <option value="2do">Segundo Año</option>
            <option value="3ro">Tercer Año</option>
            <option value="4to">Cuarto Año</option>
            <option value="5to">Quinto Año</option>
            <option value="6to">Sexto Año</option>
            </select>
          </div>
          {curso && (
        <div className="mt-2.5">
          <select required value={division} onChange={handleDivisionChange} className="block text-sm font-semibold leading-6 text-gray-900">
            <option value="" disabled>División</option>
            {curso === '1ro' && (
              <>
                <option value="1ro 1ra">1ro 1ra</option>
                <option value="1ro 2da">1ro 2da</option>
                <option value="1ro 3ra">1ro 3ra</option>
                <option value="1ro 4ta">1ro 4ta</option>
                <option value="1ro 5ta">1ro 5ta</option>
                <option value="1ro 6ta">1ro 6ta</option>
              </>
            )}
            {curso === '2do' && (
              <>
                <option value="2do 1ra">2do 1ra</option>
                <option value="2do 2da">2do 2da</option>
                <option value="2do 3ra">2do 3ra</option>
                <option value="2do 4ta">2do 4ta</option>
                <option value="2do 5ta">2do 5ta</option>
                <option value="2do 6ta">2do 6ta</option>
              </>
            )}
            {curso === '3ro' && (
              <>
                <option value="3ro 1ra">3ro 1ra</option>
                <option value="3ro 2da">3ro 2da</option>
                <option value="3ro 3ra">3ro 3ra</option>
                <option value="3ro 4ta">3ro 4ta</option>
                <option value="3ro 5ta">3ro 5ta</option>
                <option value="3ro 6ta">3ro 6ta</option>
              </>
            )}
            {curso === '4to' && (
              <>
                <option value="4to 1ra">4to 1ra</option>
                <option value="4to 2da">4to 2da</option>
                <option value="4to 3ra">4to 3ra</option>
                <option value="4to 4ta">4to 4ta</option>
                <option value="4to 5ta">4to 5ta</option>
              </>
            )}
            {curso === '5to' && (
              <>
                <option value="5to 1ra">5to 1ra</option>
                <option value="5to 2da">5to 2da</option>
                <option value="5to 3ra">5to 3ra</option>
                <option value="5to 4ta">5to 4ta</option>
              </>
            )}
            {curso === '6to' && (
              <>
                <option value="6to 1ra">6to 1ra</option>
                <option value="6to 2da">6to 2da</option>
                <option value="6to 3ra">6to 3ra</option>
                <option value="6to 4ta">6to 4ta</option>
              </>
            )}
          </select>
        </div>
      )}


        {/* Email del Usuario */}
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
              required
                placeholder='Example@gmail.com'
                onChange={(e)=> setEmailRegister(e.target.value)}
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* Contraseña Del Alumno */}
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Contraseña
            </label>
            <div className="mt-2.5">
              <InputGroup className="mt-2.5s">
              <input
                required
                onChange={(e) => {
                setPasswordRegister(e.target.value);
                onChange(e);
                }}
                type={shown ? 'text' : 'password'}
                value={password}
                id="password"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <InputRightElement width="3rem" height="2.5rem">
            <svg onClick={switchShown} class="h-6 w-6 text-gray-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />  <line x1="1" y1="1" x2="23" y2="23" />
            {shown ? 'Ocultar' : 'Mostrar'}
            </svg>
            </InputRightElement>
            </InputGroup>
            </div>
          </div>

          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Confirmar Contraseña
            </label>
            <div className="mt-2.5">
              <input
                type="password"
                name="confirm"
                id="confirm"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-gray-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              Desea guardar la informacion del registro?{' '}
              <a href="#" className="font-semibold text-indigo-600">
                Politica&nbsp;De Privacidad
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>

        <div className="mt-10">
          <button
            onChange={(e) => {
              e.preventDefault();
              handleRegister(e);
            }}
            type="submit"
            className="block w-full rounded-md bg-gray-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Registrarme
          </button>
          <br />
          <Link to="/LoginAlumno" className="font-semibold text-indigo-600">Tienes una cuenta? Inicia Sesion</Link>
        </div>


      </form>
    </div>
  )
}
