import React from 'react';
import { ArrowRight, Award } from 'lucide-react';

export const FeatureCampaign: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contenedor Split con Curva Institucional (Inspirado en Screenshot 3) */}
        <div className="rounded-3xl overflow-hidden shadow-2xl bg-brand-navy grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Lado Izquierdo: Fotografía de Voluntarios y Acción en Campo */}
          <div className="lg:col-span-6 relative min-h-[360px] lg:min-h-[480px]">
            <img 
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80" 
              alt="Voluntariado y respuesta comunitaria en Chihuahua"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:hidden" />
          </div>

          {/* Lado Derecho: Contenedor con Fondo Morado/Azul Profundo y Curva */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center text-white relative">
            
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-pillar-purple text-white text-[11px] font-heading font-extrabold uppercase px-3 py-1 rounded-full tracking-[2px] flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                CONVOCATORIA Y ALIANZAS 2026
              </span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-tight mb-4">
              FONDO DE MOVILIDAD SOCIAL Y EMPLEABILIDAD JUVENIL
            </h3>

            <p className="font-body text-gray-200 text-sm sm:text-base leading-relaxed mb-8">
              En alianza con empresas del sector aeroespacial y manufacturero de Chihuahua, United Way lanza este fondo especial para capacitar a más de 1,200 jóvenes en competencias técnicas avanzadas, inglés laboral y habilidades blandas para su inserción en la industria.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#convocatoria"
                className="border-2 border-white hover:bg-white hover:text-brand-navy text-white font-heading font-extrabold text-xs uppercase px-7 py-3.5 rounded-full tracking-[2px] transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                VER REQUISITOS Y BASES
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#empresas"
                className="text-xs font-heading font-bold uppercase tracking-wider text-brand-sky hover:text-white underline underline-offset-4 transition-colors"
              >
                ¿Quieres sumarte como empresa donante? →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
