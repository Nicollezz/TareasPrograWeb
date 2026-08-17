export interface ResultadoContador {
  count: number;
  error: string;
  incrementar: () => void;
  decrementar: () => void;
  reiniciar: () => void;
}