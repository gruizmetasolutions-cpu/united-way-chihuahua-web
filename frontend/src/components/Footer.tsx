import React from 'react';
import { Heart, MapPin, Phone, Mail, ExternalLink, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-brand-navy text-white pt-16 pb-12 border-t-4 border-brand-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Columna 1 y 2: Identidad Institucional */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-navy shadow-md">
                <Heart className="w-5 h-5 text-brand-red fill-brand-red" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-tight text-white leading-none">
                  UNITED WAY
                </span>
                <span className="text-[11px] font-heading font-extrabold uppercase tracking-[0.2em] text-brand-sky leading-tight">
                  CHIHUAHUA
                </span>
                <span className="text-[9px] text-gray-300 tracking-wider">
                  FONDOS UNIDOS CHIHUAHUA I.A.P.
                </span>
              </div>
            </div>

            <p className="font-body text-xs sm:text-sm text-gray-300 leading-relaxed max-w-sm">
              Institución de Asistencia Privada que une a personas, empresas y organizaciones para crear soluciones sostenibles y mejorar la calidad de vida de las comunidades en Chihuahua.
            </p>

            <div className="space-y-2 text-xs text-gray-300 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-sky flex-shrink-0 mt-0.5" />
                <span>Av. Pascual Orozco #1105, Col. San Felipe, C.P. 31203, Chihuahua, Chih., México.</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-sky flex-shrink-0" />
                <span>(614) 414-0466 / (614) 414-0477</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-sky flex-shrink-0" />
                <span>contacto@uwchihuahua.org</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300">
              <ShieldCheck className="w-4 h-4 text-brand-sky" />
              <span>Donataria Autorizada SAT para efectos de ISR</span>
            </div>
          </div>

          {/* Columna 3: Nuestro Impacto */}
          <div>
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-[2px] text-brand-sky mb-4">
              NUESTRO IMPACTO
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300 font-medium">
              <li><a href="#jovenes" className="hover:text-white transition-colors">Oportunidades para Jóvenes</a></li>
              <li><a href="#robotica" className="hover:text-white transition-colors">Robótica STEAM</a></li>
              <li><a href="#salud" className="hover:text-white transition-colors">Comunidad Saludable</a></li>
              <li><a href="#adopta-parque" className="hover:text-white transition-colors">Adopta un Parque</a></li>
              <li><a href="#resiliencia" className="hover:text-white transition-colors">Resiliencia Comunitaria</a></li>
              <li><a href="#voluntariado" className="hover:text-white transition-colors">Voluntariado y Finanzas</a></li>
              <li><a href="#korima" className="hover:text-white transition-colors">Colecta Anual Kórima</a></li>
            </ul>
          </div>

          {/* Columna 4: Empresas & Alianzas */}
          <div>
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-[2px] text-brand-sky mb-4">
              EMPRESAS Y RSE
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300 font-medium">
              <li><a href="#empresas-inversion" className="hover:text-white transition-colors">Inversión Social Estratégica</a></li>
              <li><a href="#empresas-voluntariado" className="hover:text-white transition-colors">Voluntariado Corporativo</a></li>
              <li><a href="#empresas-nomina" className="hover:text-white transition-colors">Campaña en Nómina</a></li>
              <li><a href="#golf" className="hover:text-white transition-colors">Torneo de Golf 2026</a></li>
              <li><a href="#contacto-empresas" className="hover:text-white transition-colors">Agenda con tu Empresa</a></li>
            </ul>
          </div>

          {/* Columna 5: Transparencia & Legal */}
          <div>
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-[2px] text-brand-sky mb-4">
              TRANSPARENCIA
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300 font-medium">
              <li><a href="#informes" className="hover:text-white transition-colors">Informes Anuales de Actividades</a></li>
              <li><a href="#auditorias" className="hover:text-white transition-colors">Estados Financieros Auditados</a></li>
              <li><a href="#sat" className="hover:text-white transition-colors">Constancia de Donataria SAT</a></li>
              <li><a href="#aviso-privacidad" className="hover:text-white transition-colors">Aviso de Privacidad</a></li>
              <li><a href="#terminos" className="hover:text-white transition-colors">Términos de Donación</a></li>
            </ul>
          </div>

        </div>

        {/* Barra de Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © 2026 Fondos Unidos Chihuahua I.A.P. / United Way Chihuahua. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://unitedway.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
              United Way Worldwide
              <ExternalLink className="w-3 h-3" />
            </a>
            <a href="#aviso-privacidad" className="hover:text-white transition-colors">
              Privacidad
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
