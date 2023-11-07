/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import React from 'react';
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import {useAuth} from "../../context/authContext"
import { Link, useNavigate } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [agreed, setAgreed] = useState(false)
  const auth = useAuth();
  const navigate = useNavigate();
  const {displayName} = auth.user
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChange = ({ currentTarget }) => setPassword(currentTarget.value);
  const [shown, setShown] = React.useState(false);
  const switchShown = () => setShown(!shown);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.login(email, password);
      navigate('/LoginAlumno/MenuPrincipal');
    } catch (error) {
      setError('Inicio de sesion fallido. Contraseña incorrecta o Correo Electronico');
    }
  };
  const handleGoogle = async (e) => {
    e.preventDefault()
    try {
      await auth.LoginWithGoogle()
      navigate('/LoginAlumno/MenuPrincipal');
    } catch (error) {
      setError('Inicio de sesion fallido. Contraseña incorrecta o Correo Electronico');
    }
  };
  const handleGitHub = async (e) =>{
    e.preventDefault()
    try {
      await auth.LoginWithGithub()
      navigate('/LoginAlumno/MenuPrincipal');
    } catch (error) {
      
    }
  };
  const handleLogout = () => {
    auth.logout();
    navigate('/RegistroAlumno')
  }


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
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bienvenido Alumno</h2>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">


        {/* Email del Usuario */}

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                onChange={(e)=> setEmail(e.target.value)}
                placeholder='Example@gmail.com'
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* Contraseña Del Alumno */}

          <div className="sm:col-span-2">
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Contraseña
            </label>
            <div className="mt-2.5">
              <InputGroup className="mt-2.5s">
              <input
                onChange={(e)=> {
                  setPassword(e.target.value)
                  onChange(e);
                }}
                type={shown ? 'text' : 'password'}
                value={password}
                name="password"
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
              Desea guardar la contraseña?{' '}
              <a href="#" className="font-semibold text-indigo-600">
                Politica&nbsp;De Privacidad
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>

        <div className="mt-10">
          <button
            onClick={(e)=> handleLogin(e)}
            type="submit"
            className="block w-full rounded-md bg-gray-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Iniciar Sesion
          </button>
          
          <br />

          <button
            onClick={(e)=>handleGoogle(e)}
            type="submit"
            className="block w-full rounded-md bg-gray-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Google
          </button>

          <br />

          <button
          onClick={(e)=>handleGitHub(e)}
            type="submit"
            className="block w-full rounded-md bg-gray-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Git Hub
          </button>

          <br />

          <button
          onClick={()=>handleLogout()}
            type="submit"
            className="block w-full rounded-md bg-gray-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Logout
          </button>

          <br />

          <Link to="/RegistroAlumno" className="font-semibold text-indigo-600">No tienes Cuenta? Registrate</Link>

        </div>
      </form>

      <br />
      <br />
      {error && <p className='text-center text-xm font-semibold text-red-600'>{error}</p>}
    </div>
  )
}
