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
import { useState } from 'react'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [agreed, setAgreed] = useState(false)

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
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bienvenido Preceptor</h2>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

          {/* Nombre del Profesor */}
          
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Nombre
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* Apellido del Profesor */}

          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Apellido
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* Telefono del Profesor */}

          <div>
            <label htmlFor="number" className="block text-sm font-semibold leading-6 text-gray-900">
              Telefono
            </label>
            <div className="mt-2.5">
              <input
                type="number"
                name="phone-number"
                id="phone-number"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <select name="curso" id="curso" className="block text-sm font-semibold leading-6 text-gray-900">
              <option value="" className="block text-sm font-semibold leading-6 text-gray-900">Curso</option>
              <option value="" className="block text-sm font-semibold leading-6 text-gray-900">Primer Año</option>
              <option value="" className="block text-sm font-semibold leading-6 text-gray-900">Segundo Año</option>
              <option value="" className="block text-sm font-semibold leading-6 text-gray-900">Tercer Año</option>
              <option value="" className="block text-sm font-semibold leading-6 text-gray-900">Cuarto Año</option>
              <option value="" className="block text-sm font-semibold leading-6 text-gray-900">Quinto Año</option>
              <option value="" className="block text-sm font-semibold leading-6 text-gray-900">Sexto Año</option>
            </select>
            <div className="mt-2.5">
            </div>
          </div>
          <div>
            <select name="curso" id="curso" className="block text-sm font-semibold leading-6 text-gray-900">
              <option value="" className="block text-sm font-semibold leading-6 text-gray-900">Materia</option>
              <option value="" className="block text-sm font-semibold leading-6 text-gray-900">Ingles</option>
              <option value="" className="block text-sm font-semibold leading-6 text-gray-900">Fisica</option>
              <option value="" className="block text-sm font-semibold leading-6 text-gray-900">Quimica</option>
              <option value="" className="block text-sm font-semibold leading-6 text-gray-900">Dibujo Tecnico</option>
              <option value="" className="block text-sm font-semibold leading-6 text-gray-900">Matematica</option>
              <option value="" className="block text-sm font-semibold leading-6 text-gray-900">Lengua y Literatura</option>
              <option value="" className="block text-sm font-semibold leading-6 text-gray-900">Biologia e Higiene</option>
            </select>
            <div className="mt-2.5">
            </div>
          </div>

                            {/* Email del Usuario */}

                            <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                placeholder="Example@gmail.com"
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
            <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">
              Contraseña
            </label>
            <div className="mt-2.5">
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-semibold leading-6 text-gray-900">
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
            type="submit"
            className="block w-full rounded-md bg-gray-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Siguiente
          </button>
        </div>
      </form>
    </div>
  )
}