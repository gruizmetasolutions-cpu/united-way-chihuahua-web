import { useState, type ChangeEvent } from 'react';
import { X, Heart, ShieldCheck, ExternalLink } from 'lucide-react';

interface GivecloudModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GivecloudModal: React.FC<GivecloudModalProps> = ({ isOpen, onClose }) => {
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('monthly');
  const [amount, setAmount] = useState<number>(500);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [selectedCause, setSelectedCause] = useState<string>('general');

  if (!isOpen) return null;

  const PRESET_AMOUNTS = [250, 500, 1000, 2500];

  const handleSelectPreset = (val: number) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(val);
    if (val) setAmount(Number(val));
  };

  const currentTotal = customAmount ? Number(customAmount) : amount;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-gray-100 relative animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera del Modal */}
        <div className="bg-brand-navy p-6 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center text-white">
              <Heart className="w-4 h-4 fill-white" />
            </div>
            <span className="text-xs font-heading font-extrabold uppercase tracking-[2px] text-brand-sky">
              DONACIÓN SEGURA
            </span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight">
            TU DONATIVO TRANSFORMA CHIHUAHUA
          </h3>
          <p className="font-body text-xs text-gray-300 mt-1">
            Plataforma conectada de forma directa con Givecloud y el SAT.
          </p>
        </div>

        {/* Cuerpo de Selección */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* 1. Selector de Frecuencia */}
          <div>
            <label className="block text-xs font-heading font-extrabold uppercase tracking-wider text-gray-400 mb-2">
              Frecuencia del donativo:
            </label>
            <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-xl">
              <button
                type="button"
                onClick={() => setFrequency('monthly')}
                className={`py-2.5 rounded-lg text-xs font-heading font-extrabold uppercase tracking-wider transition-all ${
                  frequency === 'monthly'
                    ? 'bg-brand-royal text-white shadow-md'
                    : 'text-gray-600 hover:text-brand-navy'
                }`}
              >
                Donativo Mensual
              </button>
              <button
                type="button"
                onClick={() => setFrequency('once')}
                className={`py-2.5 rounded-lg text-xs font-heading font-extrabold uppercase tracking-wider transition-all ${
                  frequency === 'once'
                    ? 'bg-brand-royal text-white shadow-md'
                    : 'text-gray-600 hover:text-brand-navy'
                }`}
              >
                Única Vez
              </button>
            </div>
          </div>

          {/* 2. Selector de Monto */}
          <div>
            <label className="block text-xs font-heading font-extrabold uppercase tracking-wider text-gray-400 mb-2">
              Selecciona el monto ({frequency === 'monthly' ? 'al mes' : 'único'}):
            </label>
            <div className="grid grid-cols-4 gap-2 mb-3">
              {PRESET_AMOUNTS.map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => handleSelectPreset(val)}
                  className={`py-3 rounded-xl font-display text-xl font-bold transition-all border ${
                    !customAmount && amount === val
                      ? 'bg-brand-navy text-white border-brand-navy shadow-md scale-105'
                      : 'bg-white text-brand-dark border-gray-200 hover:border-brand-royal/50'
                  }`}
                >
                  ${val}
                </button>
              ))}
            </div>

            <div className="relative">
              <span className="absolute left-4 top-3 text-sm font-bold text-gray-400">$</span>
              <input
                type="text"
                placeholder="Otro monto personalizado (MXN)"
                value={customAmount}
                onChange={handleCustomChange}
                className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm font-heading font-bold focus:outline-none focus:border-brand-royal"
              />
            </div>
          </div>

          {/* 3. Causa Destino */}
          <div>
            <label className="block text-xs font-heading font-extrabold uppercase tracking-wider text-gray-400 mb-2">
              Destinar mi donativo a:
            </label>
            <select
              value={selectedCause}
              onChange={(e) => setSelectedCause(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs font-heading font-bold text-brand-dark focus:outline-none focus:border-brand-royal bg-white"
            >
              <option value="general">Donde más se necesite (Fondo General)</option>
              <option value="jovenes">Oportunidades para Jóvenes y Becas STEAM</option>
              <option value="salud">Comunidad Saludable y Prevención Médica</option>
              <option value="resiliencia">Resiliencia y Fondo de Emergencias</option>
              <option value="korima">Colecta Kórima y Voluntariado</option>
            </select>
          </div>

          {/* 4. Garantía SAT y Transparencia */}
          <div className="p-3 bg-brand-cream/60 rounded-xl flex items-start gap-2.5 text-xs text-brand-dark">
            <ShieldCheck className="w-5 h-5 text-brand-royal flex-shrink-0 mt-0.5" />
            <span>
              <strong>Donataria Autorizada SAT</strong>. Al completar tu aportación en Givecloud podrás descargar tu factura y CFDI con deducibilidad inmediata al 100%.
            </span>
          </div>

          {/* 5. Botón de Pago Givecloud */}
          <a
            href={`https://unitedwaychihuahua.givecloud.co?amount=${currentTotal}&frequency=${frequency}&cause=${selectedCause}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-brand-red hover:bg-brand-red-hover text-white py-4 rounded-full font-heading font-extrabold text-sm uppercase tracking-[2px] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
          >
            <span>CONTINUAR CON GIVECLOUD (${currentTotal} MXN)</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>

        </div>

      </div>
    </div>
  );
};
