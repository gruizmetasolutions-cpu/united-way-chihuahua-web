import { useState, useEffect } from 'react';
import { 
  Heart, 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  ExternalLink
} from 'lucide-react';
import { NAVIGATION_DATA } from '../data/siteData';

interface HeaderProps {
  onOpenDonate: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDonate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50 transition-all duration-300">
      {/* 1. Top Bar de Servicio y Ubicación */}
      <div 
        className={`bg-brand-navy text-white text-xs py-2 px-4 transition-all duration-300 ${
          isScrolled ? 'hidden md:hidden' : 'block'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-gray-300">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-brand-sky" />
              Chihuahua, Chih., México
            </span>
            <span className="hidden sm:flex items-center gap-1.5 font-medium">
              <Phone className="w-3.5 h-3.5 text-brand-sky" />
              (614) 414-0466
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://unitedwaychihuahua.givecloud.co" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-brand-sky hover:text-white transition-colors flex items-center gap-1 font-semibold"
            >
              Donación Segura Givecloud
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-gray-500">|</span>
            <a href="#transparencia" className="hover:text-brand-sky transition-colors">
              Transparencia SAT
            </a>
          </div>
        </div>
      </div>

      {/* 2. Barra de Navegación Principal (Sticky) */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-gray-100' 
            : 'bg-white py-4 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo Oficial United Way Chihuahua */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-brand-navy text-white shadow-md group-hover:scale-105 transition-transform">
              {/* Símbolo representativo de la mano y sol de United Way */}
              <div className="w-8 h-8 rounded-full border-2 border-pillar-yellow flex items-center justify-center bg-brand-royal/40">
                <Heart className="w-4 h-4 text-brand-red fill-brand-red" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold tracking-tight text-brand-navy leading-none">
                UNITED WAY
              </span>
              <span className="text-[11px] font-heading font-extrabold uppercase tracking-[0.2em] text-brand-royal leading-tight mt-0.5">
                CHIHUAHUA
              </span>
              <span className="text-[9px] text-gray-500 tracking-wider">
                FONDOS UNIDOS CHIHUAHUA I.A.P.
              </span>
            </div>
          </a>

          {/* Menú Desktop con Mega-Dropdown */}
          <div className="hidden lg:flex items-center gap-1">
            {NAVIGATION_DATA.map((item) => (
              <div 
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a 
                  href={item.href}
                  className={`px-3.5 py-2 rounded-lg font-heading text-sm font-semibold flex items-center gap-1 transition-colors ${
                    activeDropdown === item.label 
                      ? 'text-brand-royal bg-gray-50' 
                      : 'text-brand-dark hover:text-brand-royal'
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="text-[10px] bg-brand-royal/10 text-brand-royal px-1.5 py-0.5 rounded font-bold uppercase tracking-wider ml-1">
                      {item.badge}
                    </span>
                  )}
                  {item.children && <ChevronDown className="w-3.5 h-3.5 text-gray-400" />}
                </a>

                {/* Mega-Dropdown para "Nuestro Impacto" y Submenús */}
                {item.children && activeDropdown === item.label && (
                  <div className={`absolute top-full left-0 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 transition-all animate-fadeIn ${
                    item.label === 'Nuestro Impacto' ? 'w-[520px] -left-20' : 'w-72'
                  }`}>
                    {item.label === 'Nuestro Impacto' ? (
                      <div>
                        <div className="border-b border-gray-100 pb-2 mb-3">
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                            Nuestros 4 Pilares de Intervención
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {item.children.map((sub) => (
                            <a 
                              key={sub.label}
                              href={sub.href}
                              className="p-2.5 rounded-lg hover:bg-gray-50 transition-colors border-l-4 group/sub"
                              style={{ borderColor: sub.color || '#21296B' }}
                            >
                              <div className="font-heading font-bold text-sm text-brand-navy group-hover/sub:text-brand-royal">
                                {sub.label}
                              </div>
                              {sub.description && (
                                <p className="text-xs text-gray-500 mt-0.5 line-clamp-2 leading-relaxed">
                                  {sub.description}
                                </p>
                              )}
                            </a>
                          ))}
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-100 bg-brand-cream/40 rounded-lg p-2.5 flex items-center justify-between">
                          <span className="text-xs font-semibold text-brand-navy">
                            ¿Quieres conocer todos los 16 programas?
                          </span>
                          <a href="#impacto" className="text-xs font-bold text-brand-royal hover:underline">
                            Ver catálogo completo →
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-1">
                        {item.children.map((sub) => (
                          <a 
                            key={sub.label}
                            href={sub.href}
                            className="p-2 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <div className="font-heading font-bold text-sm text-brand-navy">
                              {sub.label}
                            </div>
                            {sub.description && (
                              <p className="text-xs text-gray-500 mt-0.5">
                                {sub.description}
                              </p>
                            )}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Botones de Acción Derecha */}
          <div className="hidden sm:flex items-center gap-3">
            <button 
              onClick={onOpenDonate}
              className="bg-brand-red hover:bg-brand-red-hover text-white font-heading font-extrabold text-xs uppercase px-5 py-2.5 rounded-full tracking-[2px] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              DONA AQUÍ
            </button>
          </div>

          {/* Botón Móvil */}
          <div className="flex items-center gap-2 lg:hidden">
            <button 
              onClick={onOpenDonate}
              className="bg-brand-red text-white text-xs font-heading font-extrabold uppercase px-3 py-1.5 rounded-full tracking-wider"
            >
              DONAR
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-navy hover:bg-gray-100 rounded-lg"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Drawer de Menú Móvil */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col gap-2">
              {NAVIGATION_DATA.map((item) => (
                <div key={item.label} className="border-b border-gray-50 py-2">
                  <a 
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-heading font-bold text-base text-brand-navy flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="text-[10px] bg-brand-royal/10 text-brand-royal px-2 py-0.5 rounded font-bold">
                        {item.badge}
                      </span>
                    )}
                  </a>
                  {item.children && (
                    <div className="pl-3 mt-2 flex flex-col gap-2 border-l-2 border-gray-100">
                      {item.children.map((sub) => (
                        <a 
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-sm text-gray-600 hover:text-brand-royal py-1 flex items-center gap-2"
                        >
                          {sub.color && (
                            <span 
                              className="w-2 h-2 rounded-full" 
                              style={{ backgroundColor: sub.color }}
                            />
                          )}
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 flex flex-col gap-2">
                <button 
                  onClick={() => { setMobileMenuOpen(false); onOpenDonate(); }}
                  className="w-full bg-brand-red text-white py-3 rounded-xl font-heading font-extrabold uppercase tracking-widest text-sm shadow-md"
                >
                  DONAR AHORA
                </button>
                <a 
                  href="tel:6144140466"
                  className="w-full text-center text-xs text-gray-500 py-2"
                >
                  Llamar a oficinas: (614) 414-0466
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
