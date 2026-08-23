import React from 'react';
import { useFormularioContacto } from '../hooks/useFormularioContacto';

export const FormularioContacto: React.FC = () => {
  const {
    datosFormulario,
    enviado,
    esValido,
    manejarCambio,
    manejarEnvio,
    reiniciarFormulario,
  } = useFormularioContacto();

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
      
     
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-orange-600">
          Contáctame
        </h2>
      </div>

      {enviado ? (
        
        <div className="text-center space-y-4">
          <p className="text-emerald-800 font-medium">
            ¡Gracias por tu mensaje! Nos pondremos en contacto pronto.
          </p>
          <button
            onClick={reiniciarFormulario}
            className="w-full py-2 bg-orange-500 text-white rounded font-medium hover:bg-orange-600 cursor-pointer"
          >
            Enviar otro mensaje
          </button>
        </div>
      ) : (
       
        <form onSubmit={manejarEnvio} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-emerald-900 mb-1">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              value={datosFormulario.nombre}
              onChange={manejarCambio}
              placeholder="Nombre completo"
              className="w-full p-2 border border-emerald-500 rounded focus:outline-none focus:border-emerald-600"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-emerald-900 mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              name="email"
              value={datosFormulario.email}
              onChange={manejarCambio}
              placeholder="carlos@gmail.com"
              className="w-full p-2 border border-emerald-500 rounded focus:outline-none focus:border-emerald-600"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-emerald-900 mb-1">
              Mensaje
            </label>
            <textarea
              name="mensaje"
              rows={4}
              value={datosFormulario.mensaje}
              onChange={manejarCambio}
              placeholder="Escribe tu consulta..."
              className="w-full p-2 border border-emerald-500 rounded focus:outline-none focus:border-emerald-600 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={!esValido}
            className={`w-full py-2 rounded font-medium text-white ${
              esValido
                ? 'bg-orange-500 hover:bg-orange-600 cursor-pointer'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            Enviar Mensaje
          </button>
        </form>
      )}
    </div>
  );
};
