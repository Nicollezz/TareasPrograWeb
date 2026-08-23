import { useState, useEffect } from 'react';
import type { DatosFormulario } from '../types/contacto.types';

export const useFormularioContacto = () => {

  const [datosFormulario, setDatosFormulario] = useState<DatosFormulario>({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const [enviado, setEnviado] = useState<boolean>(false);


  useEffect(() => {
    const datosGuardados = localStorage.getItem('portafolio_contacto_formulario');
    const enviadoGuardado = localStorage.getItem('portafolio_contacto_enviado');

    if (datosGuardados) {
      setDatosFormulario(JSON.parse(datosGuardados));
    }
    if (enviadoGuardado) {
      setEnviado(JSON.parse(enviadoGuardado));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('portafolio_contacto_formulario', JSON.stringify(datosFormulario));
    localStorage.setItem('portafolio_contacto_enviado', JSON.stringify(enviado));
  }, [datosFormulario, enviado]);


  const validarEmail = (email: string): boolean => {
    return email.includes('@') && email.includes('.');
  };

 
  const esValido =
    datosFormulario.nombre.trim() !== '' &&
    validarEmail(datosFormulario.email) &&
    datosFormulario.mensaje.trim() !== '';

  
  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDatosFormulario({
      ...datosFormulario,
      [name]: value,
    });
  };


  const manejarEnvio = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (esValido) {
      console.log('Mensaje enviado:', datosFormulario);
      setEnviado(true);
    }
  };

 
  const reiniciarFormulario = () => {
    setDatosFormulario({ nombre: '', email: '', mensaje: '' });
    setEnviado(false);
    localStorage.clear();
  };

  return {
    datosFormulario,
    enviado,
    esValido,
    manejarCambio,
    manejarEnvio,
    reiniciarFormulario,
  };
};