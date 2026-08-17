import React from 'react';
import { useContador } from '../hooks/useContador';

const Contador: React.FC = () => {
  const { count, error, incrementar, decrementar, reiniciar } = useContador(0);

  return (
    <div className="bg-white border border-slate-200 shadow-xl rounded-3xl p-8 w-full max-w-md text-center">
      
      <div className="mb-6">
        
        <h1 className="text-2xl  text-blue-400">Contador de Tareas</h1>
      </div>
      
      
      <div className=" text-xl  text-blue-400  mb-6">{count}</div>

     
      {error && (
        <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-full text-red-600 text-xs font-medium flex items-center justify-center gap-2">
          <span>:c</span> {error}
        </div>
      )}

      
      <div className="grid grid-cols-3 gap-3">
        <button 
          onClick={decrementar} 
          className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 rounded-full transition-all duration-200 active:scale-95 cursor-pointer"
        >
          -
        </button>
        
        <button 
          onClick={reiniciar} 
          className="bg-blue-50 hover:bg-blue-100 text-blue-400 font-semibold text-sm py-3.5 rounded-full transition-all duration-200 active:scale-95 cursor-pointer"
        >
          Reinicia
        </button>
        
        <button 
          onClick={incrementar} 
          className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-3.5 rounded-full transition-all duration-200 active:scale-95 cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Contador;