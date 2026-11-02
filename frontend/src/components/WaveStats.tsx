import React from 'react';
import { SITE_STATS } from '../data/siteData';

export const WaveStats: React.FC = () => {
  return (
    <section className="w-full relative overflow-hidden text-white">
      {/* Contenedor Bicolor con Transición Ondulada (Inspirado en Screenshot 2) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[440px]">
        
        {/* Lado Izquierdo: Azul Marino Profundo (#21296B) con Narrativa */}
        <div className="lg:col-span-5 bg-brand-navy p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative">
          <div className="max-w-md">
            <span className="text-xs font-heading font-extrabold uppercase tracking-[3px] text-pillar-yellow mb-2 block">
              IMPACTO COLECTIVO
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase leading-tight mb-4">
              UNITED WAY ES UNA RED PARA LA ACCIÓN COMUNITARIA
            </h2>
            <p className="font-body text-gray-300 text-base leading-relaxed">
              Unimos a personas, empresas y organizaciones civiles para resolver los desafíos sociales más complejos de Chihuahua con transparencia, métricas claras y resultados medibles.
            </p>
          </div>

          {/* Sombra o arco visual sutil */}
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-black/10 hidden lg:block" />
        </div>

        {/* Lado Derecho: Azul Real (#0044B5) con Cifras Gigantes en Amarillo (#FFBA00) */}
        <div className="lg:col-span-7 bg-brand-royal p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
            {SITE_STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                {/* Cifra Gigante en Fuente Antonio y Amarillo */}
                <div className="font-display text-5xl sm:text-6xl font-bold text-pillar-yellow tracking-tight leading-none mb-2">
                  {stat.value}
                </div>
                {/* Etiqueta en Nunito Sans Bold */}
                <div className="font-heading font-extrabold text-sm sm:text-base uppercase tracking-wider text-white mb-1">
                  {stat.label}
                </div>
                {/* Descripción contextual */}
                <p className="font-body text-xs sm:text-sm text-blue-100 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
