import { useCalculadora } from '../hooks/useCalculadora';

export const Calculadora = () => {
  const { montoCuenta, setMontoCuenta, porcentaje, setPorcentaje, propina, total } = useCalculadora();

  return (
    <div className="w-full max-w-md space-y-4">
      
     
      <div className="bg-blue-200 w-full rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        <div className="bg-blue-400 p-6 text-white text-center">
          <h1 className="text-2xl font-bold">Calculadora de Propinas</h1>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Monto de la Cuenta</label>
            <input
              type="number"
              value={montoCuenta}
              onChange={(e) => setMontoCuenta(e.target.value)}
              className="w-full p-3 bg-blue-100 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none text-slate-800"
              placeholder="0.00"
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[10, 15, 20].map((p) => (
              <button
                key={p}
                onClick={() => setPorcentaje(p)}
                className={`py-2 rounded-lg font-bold transition ${porcentaje === p ? 'bg-blue-400 text-white shadow' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}
              >
                {p}%
              </button>
            ))}
          </div>
        </div>
      </div>

     
      <div className="bg-blue-200 w-full rounded-2xl shadow-xl overflow-hidden border border-slate-200 p-6 space-y-4">
        <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider">Calculado:</h2>
        
        <div className="bg-blue-100 p-4 rounded-lg flex justify-between items-center text-slate-700 ">
          <span>Propina ({porcentaje}%):</span>
          <span className="fonttext-lg text-slate-900">${propina.toFixed(2)}</span>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg flex justify-between items-center text-slate-800 ">
          <span className="font">Total a Pagar:</span>
          <span className=" text-xl text-slate-900">Lps {total.toFixed(2)}</span>
        </div>
      </div>

    </div>
  );
};