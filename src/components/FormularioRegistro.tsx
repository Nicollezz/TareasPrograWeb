import React from 'react';
import { useRegistro } from '../hooks/useRegistro';

export const FormularioRegistro: React.FC = () => {
  const {
    datosRegistro,
    registrado,
    esValido,
    manejarCambio,
    manejarEnvio,
    reiniciarRegistro,
  } = useRegistro();

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl w-96 border-t-4 border-orange-500">
      
      {/* Título */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-orange-600">
          Regístrate
        </h2>
        
      </div>

      {registrado ? (
        /* Vista de Éxito */
        <div className="text-center space-y-4">
          <p className="text-emerald-700 font-semibold text-base">
            ¡Registro exitoso! ¡Bienvenido, {datosRegistro.nombreUsuario}!
          </p>
          <button
            onClick={reiniciarRegistro}
            className="w-full py-2.5 bg-emerald-600 text-white rounded font-medium hover:bg-emerald-700 cursor-pointer shadow-md transition"
          >
            Registrar otro usuario
          </button>
        </div>
      ) : (
        /* Formulario */
        <form onSubmit={manejarEnvio} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Nombre de Usuario
            </label>
            <input
              type="text"
              name="nombreUsuario"
              value={datosRegistro.nombreUsuario}
              onChange={manejarCambio}
              placeholder="Ej. carlos_store"
              className="w-full p-2.5 border border-gray-300 rounded focus:outline-none focus:border-orange-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              name="email"
              value={datosRegistro.email}
              onChange={manejarCambio}
              placeholder="ejemplo@correo.com"
              className="w-full p-2.5 border border-gray-300 rounded focus:outline-none focus:border-orange-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              name="contrasena"
              value={datosRegistro.contrasena}
              onChange={manejarCambio}
              placeholder="mínimo 6 caracteres"
              className="w-full p-2.5 border border-gray-300 rounded focus:outline-none focus:border-orange-500 text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={!esValido}
            className={`w-full py-2.5 rounded font-medium text-white transition shadow-md ${
              esValido
                ? 'bg-emerald-600 hover:bg-emerald-700 cursor-pointer'
                : 'bg-gray-300 cursor-not-allowed shadow-none'
            }`}
          >
            Registrar
          </button>
        </form>
      )}
    </div>
  );
};