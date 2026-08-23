import { useState, useEffect } from 'react';
import type { DatosRegistro } from '../types/registro.types';

const CLAVE_ALMACENAMIENTO = 'ecommerce_registro_formulario';
const CLAVE_REGISTRADO = 'ecommerce_registro_exitoso';

export const useRegistro = () => {
  
  const [datosRegistro, setDatosRegistro] = useState<DatosRegistro>(() => {
    const datosGuardados = localStorage.getItem(CLAVE_ALMACENAMIENTO);
    return datosGuardados ? JSON.parse(datosGuardados) : { nombreUsuario: '', email: '', contrasena: '' };
  });

  const [registrado, setRegistrado] = useState<boolean>(() => {
    const registradoGuardado = localStorage.getItem(CLAVE_REGISTRADO);
    return registradoGuardado ? JSON.parse(registradoGuardado) : false;
  });

   
  useEffect(() => {
    localStorage.setItem(CLAVE_ALMACENAMIENTO, JSON.stringify(datosRegistro));
  }, [datosRegistro]);

  useEffect(() => {
    localStorage.setItem(CLAVE_REGISTRADO, JSON.stringify(registrado));
  }, [registrado]);

  
  const validarEmail = (email: string): boolean => {
    return email.includes('@') && email.includes('.');
  };

  const esValido =
    datosRegistro.nombreUsuario.trim() !== '' &&
    validarEmail(datosRegistro.email) &&
    datosRegistro.contrasena.length >= 6;

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDatosRegistro({
      ...datosRegistro,
      [name]: value,
    });
  };

  const manejarEnvio = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (esValido) {
      console.log('Usuario registrado con éxito:', datosRegistro);
      setRegistrado(true);
    }
  };

  const reiniciarRegistro = () => {
    setDatosRegistro({ nombreUsuario: '', email: '', contrasena: '' });
    setRegistrado(false);
    localStorage.removeItem(CLAVE_ALMACENAMIENTO);
    localStorage.removeItem(CLAVE_REGISTRADO);
  };

  return {
    datosRegistro,
    registrado,
    esValido,
    manejarCambio,
    manejarEnvio,
    reiniciarRegistro,
  };
};