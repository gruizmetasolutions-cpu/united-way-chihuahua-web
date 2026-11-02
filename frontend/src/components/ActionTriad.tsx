import React from 'react';
import { ArrowRight, Heart, Users, Building2 } from 'lucide-react';

interface ActionTriadProps {
  onOpenDonate: () => void;
}

export const ActionTriad: React.FC<ActionTriadProps> = ({ onOpenDonate }) => {
  return (
    <section className="w-full bg-white py-16 lg:py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de Sección (Inspirado en Screenshot 5) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-heading font-extrabold uppercase tracking-[3px] text-brand-royal">
              PARTICIPACIÓN ACTIVA
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-brand-navy tracking-tight mt-1">
              ¿CÓMO PUEDES AYUDAR HOY?
            </h2>
            <p className="font-body text-gray-600 text-base mt-2">
              Elige tu forma de sumarte y marca una diferencia real en nuestra comunidad.
            </p>
          </div>

          <a 
            href="#unete"
            className="self-start md:self-auto border-2 border-brand-royal text-brand-royal hover:bg-brand-royal hover:text-white px-6 py-2.5 rounded-full font-heading font-extrabold text-xs uppercase tracking-[2px] transition-all"
          >
            MÁS FORMAS DE APOYAR
          </a>
        </div>

        {/* Las 3 Columnas de Acción Directa (Inspirado en Screenshot 5 de United Way) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-2xl overflow-hidden shadow-xl">
          
          {/* Columna 1: Donación Directa (Navy Profundo #21296B) */}
          <div 
            onClick={onOpenDonate}
            className="group cursor-pointer bg-brand-navy hover:bg-[#1a2157] text-white p-8 lg:p-10 flex flex-col justify-between min-h-[300px] transition-colors relative overflow-hidden"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 text-brand-red">
                <Heart className="w-6 h-6 fill-brand-red" />
              </div>
              <h3 className="font-display text-3xl lg:text-4xl font-bold uppercase tracking-tight mb-3">
                DONA HOY
              </h3>
              <p className="font-body text-gray-300 text-sm sm:text-base leading-relaxed">
                Cada peso se multiplica para brindar becas escolares, brigadas de salud y respuesta a contingencias en Chihuahua.
              </p>
            </div>

            <div className="pt-8 flex items-center justify-between border-t border-white/10 mt-6">
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-brand-sky group-hover:text-white">
                Donación Segura Givecloud
              </span>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Columna 2: Voluntariado Local (Azul Real #0044B5) */}
          <a 
            href="#voluntariado"
            className="group bg-brand-royal hover:bg-[#003ca0] text-white p-8 lg:p-10 flex flex-col justify-between min-h-[300px] transition-colors relative overflow-hidden"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 text-pillar-yellow">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-display text-3xl lg:text-4xl font-bold uppercase tracking-tight mb-3">
                SÉ VOLUNTARIO
              </h3>
              <p className="font-body text-blue-100 text-sm sm:text-base leading-relaxed">
                Suma tus horas y habilidades en jornadas comunitarias, mentorías STEAM infantiles y la Colecta Anual Kórima.
              </p>
            </div>

            <div className="pt-8 flex items-center justify-between border-t border-white/10 mt-6">
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-white/80 group-hover:text-white">
                Ver Programas de Voluntariado
              </span>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </a>

          {/* Columna 3: Alianza Empresarial (Azul Medio #5082F0) */}
          <a 
            href="#empresas"
            className="group bg-brand-mid hover:bg-[#4375e3] text-white p-8 lg:p-10 flex flex-col justify-between min-h-[300px] transition-colors relative overflow-hidden"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 text-white">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-display text-3xl lg:text-4xl font-bold uppercase tracking-tight mb-3">
                SUMA A TU EMPRESA
              </h3>
              <p className="font-body text-blue-50 text-sm sm:text-base leading-relaxed">
                Crea un programa de voluntariado corporativo de alto impacto o impulsa una campaña de donación en nómina 100% deducible.
              </p>
            </div>

            <div className="pt-8 flex items-center justify-between border-t border-white/10 mt-6">
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-white/80 group-hover:text-white">
                Portafolio de Alianzas RSE
              </span>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
};
