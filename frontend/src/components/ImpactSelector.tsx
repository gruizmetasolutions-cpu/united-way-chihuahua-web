import { useState } from 'react';
import { ArrowRight, CheckCircle2, LayoutGrid, Eye } from 'lucide-react';
import { IMPACT_PILLARS, type ImpactPillar } from '../data/siteData';

export const ImpactSelector: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('jovenes');
  const [viewMode, setViewMode] = useState<'circular' | 'grid'>('circular');

  const currentPillar: ImpactPillar = 
    IMPACT_PILLARS.find((p) => p.id === selectedPillarId) || IMPACT_PILLARS[0];

  return (
    <section id="impacto" className="w-full bg-[#FAFAF8] py-20 lg:py-28 overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera y Selector de Vista (Círculo Flagship vs Tarjetas con Sal y Pimienta) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 rounded-full bg-brand-red inline-block" />
              <span className="text-xs font-heading font-extrabold uppercase tracking-[3px] text-brand-royal">
                NUESTROS 4 PILARES ESTRATÉGICOS
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-brand-navy tracking-tight">
              NUESTRO IMPACTO EN CHIHUAHUA
            </h2>
            <p className="font-body text-gray-600 text-base sm:text-lg max-w-2xl mt-2">
              Trabajamos todos los días articulando causas, voluntarios y recursos para que las familias de Chihuahua alcancen su máximo potencial.
            </p>
          </div>

          {/* Toggle de Visualización para la Reunión del Jueves */}
          <div className="flex items-center bg-white p-1 rounded-xl shadow-sm border border-gray-200 self-start">
            <button
              onClick={() => setViewMode('circular')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                viewMode === 'circular'
                  ? 'bg-brand-navy text-white shadow-sm'
                  : 'text-gray-600 hover:text-brand-navy'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              Estilo United Way (Círculos)
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                viewMode === 'grid'
                  ? 'bg-brand-navy text-white shadow-sm'
                  : 'text-gray-600 hover:text-brand-navy'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              Tarjetas ("Sal y Pimienta")
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* VISTA 1: Flagship Selector Circular (Inspirado 100% en Screenshot 4) */}
        {/* ========================================================================= */}
        {viewMode === 'circular' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Columna Izquierda: Lista Vertical de Pilares con Línea Indicadora */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {IMPACT_PILLARS.map((pillar) => {
                const isActive = pillar.id === selectedPillarId;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setSelectedPillarId(pillar.id)}
                    className={`text-left p-5 rounded-2xl transition-all relative flex flex-col justify-center ${
                      isActive 
                        ? 'bg-white shadow-xl border-l-8 scale-[1.02]' 
                        : 'bg-transparent hover:bg-white/60 opacity-80 hover:opacity-100'
                    }`}
                    style={{ borderLeftColor: isActive ? pillar.color : 'transparent' }}
                  >
                    <div className="flex items-center justify-between">
                      <span 
                        className={`font-heading text-lg sm:text-xl font-extrabold tracking-tight transition-colors ${
                          isActive ? 'text-brand-navy' : 'text-gray-600'
                        }`}
                      >
                        {pillar.title}
                      </span>
                      {isActive && (
                        <div 
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: pillar.color }}
                        />
                      )}
                    </div>

                    <span className="font-body text-xs text-gray-500 mt-1 line-clamp-1">
                      {pillar.subtitle}
                    </span>

                    {/* Línea horizontal indicadora (como en Screenshot 4) */}
                    {isActive && (
                      <div 
                        className="h-0.5 w-24 mt-3 rounded-full"
                        style={{ backgroundColor: pillar.color }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Columna Derecha: Círculo Fotográfico Masivo + Disco Central Translúcido */}
            <div className="lg:col-span-7 flex justify-center items-center relative py-6">
              
              {/* Contenedor Circular Principal con Fotografía */}
              <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] rounded-full overflow-hidden shadow-2xl border-8 border-white transition-all duration-700">
                <img 
                  src={currentPillar.image} 
                  alt={currentPillar.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Disco Central Interactivo Superpuesto (Inspirado en Screenshot 4) */}
              <div 
                className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full p-6 sm:p-8 flex flex-col justify-center items-center text-center shadow-2xl backdrop-blur-md transition-all duration-500 border-4 border-white/50"
                style={{ 
                  backgroundColor: currentPillar.color,
                  color: currentPillar.id === 'jovenes' ? '#21296B' : '#FFFFFF' 
                }}
              >
                <span className="text-[10px] sm:text-xs font-heading font-extrabold uppercase tracking-[2px] opacity-90 mb-1">
                  IMPACTO CHIHUAHUA
                </span>

                <div className="font-display text-3xl sm:text-4xl font-bold leading-tight mb-2">
                  {currentPillar.statNumber}
                </div>

                <p className="font-body text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                  {currentPillar.description}
                </p>

                <a
                  href={currentPillar.href}
                  className={`inline-flex items-center gap-1.5 text-xs font-heading font-extrabold uppercase tracking-[2px] transition-transform hover:scale-105 ${
                    currentPillar.id === 'jovenes' ? 'text-brand-navy' : 'text-white'
                  }`}
                >
                  CONOCE MÁS
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* VISTA 2: Grid de 4 Tarjetas ("Con Sal y Pimienta" pedida por Elliott) */}
        {/* ========================================================================= */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
            {IMPACT_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between border border-gray-100 group"
              >
                {/* Fotografía Superior 4:3 con Zoom en Hover */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Borde de Acento Superior con el Color Oficial del Pilar */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1.5"
                    style={{ backgroundColor: pillar.color }}
                  />
                  {/* Badge Flotante del Pilar */}
                  <div 
                    className="absolute bottom-3 left-4 px-3 py-1 rounded-full text-xs font-heading font-extrabold uppercase tracking-wider text-white shadow-md"
                    style={{ backgroundColor: pillar.color }}
                  >
                    {pillar.statNumber}
                  </div>
                </div>

                {/* Contenido de la Tarjeta */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold uppercase text-brand-navy tracking-tight mb-2 group-hover:text-brand-royal transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="font-body text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {pillar.description}
                    </p>

                    {/* Programas Insignia */}
                    <div className="space-y-1.5 pt-3 border-t border-gray-100">
                      <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-gray-400">
                        Programas Clave:
                      </span>
                      {pillar.programs.slice(0, 3).map((prog) => (
                        <div key={prog.slug} className="flex items-center gap-1.5 text-xs text-brand-dark font-medium">
                          <CheckCircle2 className="w-3 h-3 text-brand-royal" />
                          <span className="truncate">{prog.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enlace con Flecha Animada */}
                  <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-heading font-extrabold uppercase tracking-wider text-brand-royal group-hover:text-brand-navy">
                    <span>Explorar programas</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
