import React from 'react';
import { Building2, ShieldCheck, HeartHandshake, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CORPORATE_PARTNERS } from '../data/siteData';

export const CorporateRSE: React.FC = () => {
  return (
    <section id="empresas" className="w-full bg-brand-cream/40 py-20 lg:py-28 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Principal de RSE */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-royal/10 text-brand-royal px-4 py-1.5 rounded-full text-xs font-heading font-extrabold uppercase tracking-[2px] mb-3">
            <Building2 className="w-4 h-4" />
            RESPONSABILIDAD SOCIAL EMPRESARIAL
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-brand-navy tracking-tight leading-tight">
            TRANSFORMA TU EMPRESA EN UN MOTOR DE IMPACTO SOCIAL
          </h2>
          <p className="font-body text-gray-700 text-base sm:text-lg mt-4 leading-relaxed">
            United Way Chihuahua es el aliado estratégico de más de 69 corporativos e industrias para canalizar inversión social, motivar a sus colaboradores y generar valor comunitario medible.
          </p>
        </div>

        {/* 3 Ejes de Valor Corporativo (Las 3 Soluciones Clave para Directivos y RH) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Eje 1: Inversión Social Estratégica */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-brand-royal/10 text-brand-royal flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-brand-navy mb-3">
                INVERSIÓN SOCIAL ESTRATÉGICA
              </h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed mb-6">
                Diseñamos proyectos sociales a la medida con objetivos claros, trazabilidad total de recursos y deducibilidad de impuestos al 100% como Donataria Autorizada SAT.
              </p>
              <ul className="space-y-2.5 text-xs text-brand-dark font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-royal flex-shrink-0" />
                  <span>Informes auditados con alineación a ODS</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-royal flex-shrink-0" />
                  <span>Emisión inmediata de recibos deducibles SAT</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-royal flex-shrink-0" />
                  <span>Supervisión y auditoría en campo</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-gray-100">
              <a href="#contacto-empresas" className="text-xs font-heading font-extrabold uppercase tracking-wider text-brand-royal group-hover:text-brand-navy flex items-center gap-1.5">
                Conoce proyectos financiables →
              </a>
            </div>
          </div>

          {/* Eje 2: Voluntariado Corporativo Llave en Mano */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-pillar-green/10 text-pillar-green flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-brand-navy mb-3">
                VOLUNTARIADO CORPORATIVO
              </h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed mb-6">
                Coordinamos jornadas vivenciales llave en mano para colaboradores y familias: rehabilitación de escuelas, reforestación de parques y brigadas comunitarias.
              </p>
              <ul className="space-y-2.5 text-xs text-brand-dark font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pillar-green flex-shrink-0" />
                  <span>Logística integral y materiales incluidos</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pillar-green flex-shrink-0" />
                  <span>Fortalecimiento de clima laboral y pertenencia</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pillar-green flex-shrink-0" />
                  <span>Registro y certificación oficial de horas</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-gray-100">
              <a href="#contacto-empresas" className="text-xs font-heading font-extrabold uppercase tracking-wider text-pillar-green group-hover:text-brand-navy flex items-center gap-1.5">
                Ver catálogo de voluntariado →
              </a>
            </div>
          </div>

          {/* Eje 3: Campaña en Nómina (Workplace Giving) */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-brand-navy/10 text-brand-navy flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-brand-navy mb-3">
                CAMPAÑA EN NÓMINA (WORKPLACE GIVING)
              </h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed mb-6">
                Fomenta una cultura filantrópica continua en tu centro de trabajo: los colaboradores aportan una cantidad voluntaria quincenal y la empresa puede multiplicarla peso a peso.
              </p>
              <ul className="space-y-2.5 text-xs text-brand-dark font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-navy flex-shrink-0" />
                  <span>Aportaciones desde $10 a la quincena</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-navy flex-shrink-0" />
                  <span>Mecanismo Matching Funds de duplicación</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-navy flex-shrink-0" />
                  <span>Reportes semestrales de vidas impactadas</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-gray-100">
              <a href="#contacto-empresas" className="text-xs font-heading font-extrabold uppercase tracking-wider text-brand-navy group-hover:text-brand-royal flex items-center gap-1.5">
                Cómo activar campaña en nómina →
              </a>
            </div>
          </div>

        </div>

        {/* Muro de Confianza Empresarial */}
        <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-200">
          <div className="text-center mb-6">
            <span className="text-xs font-heading font-extrabold uppercase tracking-[2px] text-gray-400">
              EMPRESAS QUE TRANSFORMAN CHIHUAHUA CON UNITED WAY
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {CORPORATE_PARTNERS.map((partner, index) => (
              <div 
                key={index}
                className="bg-gray-50 hover:bg-white p-4 rounded-xl text-center border border-gray-100 hover:border-brand-royal/30 hover:shadow-md transition-all flex flex-col items-center justify-center min-h-[90px]"
              >
                <span className="font-heading font-extrabold text-sm text-brand-navy">
                  {partner.name}
                </span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">
                  {partner.category}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-heading font-bold text-sm text-brand-navy">
                ¿Tu empresa aún no forma parte de la red de impacto de Chihuahua?
              </div>
              <div className="text-xs text-gray-500">
                Podemos agendar una sesión informativa de 20 minutos con tu comité de RSE o Recursos Humanos.
              </div>
            </div>
            <a
              href="mailto:alianzas@uwchihuahua.org"
              className="bg-brand-navy hover:bg-brand-royal text-white font-heading font-extrabold text-xs uppercase px-6 py-3 rounded-full tracking-[2px] transition-colors flex items-center gap-2 whitespace-nowrap shadow-md"
            >
              AGENDAR REUNIÓN CON UNITED WAY
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
