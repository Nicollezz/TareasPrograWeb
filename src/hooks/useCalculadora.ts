import { useState } from 'react';

export const useCalculadora = () => {
  const [montoCuenta, setMontoCuenta] = useState<string>('');
  const [porcentaje, setPorcentaje] = useState<number>(15);

  const cuentaNum = parseFloat(montoCuenta) || 0;
  const propina = cuentaNum * (porcentaje / 100);
  const total = cuentaNum + propina;

  return {
    montoCuenta,
    setMontoCuenta,
    porcentaje,
    setPorcentaje,
    propina,
    total
  };
};