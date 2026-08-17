import { useState } from 'react';
import type { ResultadoContador } from '../types/contador';

export const useContador = (initialValue: number = 0): ResultadoContador => {
  const [count, setCount] = useState<number>(initialValue);
  const [error, setError] = useState<string>('');

  const incrementar = () => {
    setError('');
    setCount((prev) => prev + 1);
  };

  const decrementar = () => {
    if (count <= 0) {
      setError('El contador no puede ser menor a cero.');
      return;
    }
    setError('');
    setCount((prev) => prev - 1);
  };

  const reiniciar = () => {
    setCount(0);
    setError('');
  };

  return { count, error, incrementar, decrementar, reiniciar };
};