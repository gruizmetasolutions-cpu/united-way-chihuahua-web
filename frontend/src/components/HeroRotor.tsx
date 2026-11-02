import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Pause, Play, ChevronRight, Sparkles } from 'lucide-react';
import { HERO_SLIDES, type HeroSlide } from '../data/siteData';

interface HeroRotorProps {
  onOpenDonate: () => void;
}

export const HeroRotor: React.FC<HeroRotorProps> = ({ onOpenDonate }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<number | null>(null);

  const SLIDE_DURATION = 6000; // 6 segundos por diapositiva
  const INTERVAL_STEP = 50;

  const currentSlide: HeroSlide = HERO_SLIDES[currentSlideIndex];

  // Auto-play con barra de progreso
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlideIndex((oldIndex) => (oldIndex + 1) % HERO_SLIDES.length);
          return 0;
        }
        return prev + (INTERVAL_STEP / SLIDE_DURATION) * 100;
      });
    }, INTERVAL_STEP);

    timerRef.current = interval as unknown as number;
    return () => clearInterval(interval);
  }, [isPlaying, currentSlideIndex]);

  const handleSelectSlide = (index: number) => {
    setCurrentSlideIndex(index);
    setProgress(0);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section 
      className="relative w-full pt-[88px] lg:pt-[110px] bg-slate-900 overflow-hidden select-none"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Contenedor Principal del Slide */}
      <div className="relative min-h-[580px] lg:min-h-[660px] flex items-stretch">
        
        {/* Capa de Fotografía con anclaje visual (object-position protegido para rostros) */}
        <div className="absolute inset-0 z-0">
          <img 
            src={currentSlide.image} 
            alt={currentSlide.title}
            className="w-full h-full object-cover object-[center_28%] transition-transform duration-1000 scale-105"
          />
          {/* Overlay oscuro sutil para móviles */}
          <div className="absolute inset-0 bg-brand-navy/60 lg:hidden" />
        </div>

        {/* Máscara Gráfica Orgánica de United Way (Curva institucional inspirada en Screenshot 1) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          
          {/* Tarjeta de Contenido con Máscara Curva Institucional */}
          <div className="w-full lg:w-[58%] py-12 lg:py-16 text-white">
            
            {/* Fondo curvo en desktop con backdrop y sombra suave */}
            <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl bg-brand-navy/95 backdrop-blur-md shadow-2xl border border-white/10 lg:border-none">
              
              {/* Eyebrow / Categoría */}
              <div className="flex items-center gap-2 mb-3">
                <span 
                  className="px-3 py-1 rounded-full text-[11px] font-heading font-extrabold uppercase tracking-[2px] text-white shadow-sm flex items-center gap-1.5"
                  style={{ backgroundColor: currentSlide.themeColor }}
                >
                  <Sparkles className="w-3 h-3" />
                  {currentSlide.eyebrow}
                </span>
                <span className="text-xs text-brand-sky/80 font-medium hidden sm:inline">
                  United Way Chihuahua
                </span>
              </div>

              {/* Titular Principal en Fuente Antonio (Oficial de Campaña) */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-[0.95] mb-5">
                {currentSlide.title}
              </h1>

              {/* Descripción persuasiva */}
              <p className="font-body text-base sm:text-lg text-gray-200 leading-relaxed max-w-xl mb-8">
                {currentSlide.description}
              </p>

              {/* Botones de Acción */}
              <div className="flex flex-wrap items-center gap-4">
                {currentSlide.ctaType === 'givecloud' ? (
                  <button
                    onClick={onOpenDonate}
                    className="bg-brand-red hover:bg-brand-red-hover text-white font-heading font-extrabold text-sm uppercase px-8 py-3.5 rounded-full tracking-[2px] shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
                  >
                    {currentSlide.ctaText}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <a
                    href={currentSlide.ctaHref}
                    className="bg-brand-royal hover:bg-brand-navy text-white font-heading font-extrabold text-sm uppercase px-8 py-3.5 rounded-full tracking-[2px] shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
                  >
                    {currentSlide.ctaText}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}

                <button
                  onClick={onOpenDonate}
                  className="border-2 border-white/80 hover:border-white text-white hover:bg-white/10 font-heading font-extrabold text-xs uppercase px-6 py-3 rounded-full tracking-[2px] transition-colors"
                >
                  DONAR DIRECTO
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Botón de Pausa / Reproducción en esquina inferior izquierda (como en Screenshot 1) */}
        <div className="absolute bottom-24 left-6 z-20 hidden md:block">
          <button 
            onClick={togglePlayPause}
            className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/70 transition-colors border border-white/20"
            title={isPlaying ? 'Pausar rotación' : 'Reanudar rotación'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>
        </div>

      </div>

      {/* 3. Selector Inferior de Pestañas (Rotor Controls acordados con Elliott) */}
      <div className="relative z-20 bg-brand-navy border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/10">
            {HERO_SLIDES.map((slide, index) => {
              const isActive = index === currentSlideIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => handleSelectSlide(index)}
                  className={`relative py-3.5 px-4 text-left transition-all group ${
                    isActive ? 'bg-white/10' : 'hover:bg-white/5 opacity-70 hover:opacity-100'
                  }`}
                >
                  {/* Barra de Progreso Dinámica de Tiempo */}
                  {isActive && isPlaying && (
                    <div 
                      className="absolute top-0 left-0 h-1 bg-brand-red transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                  {isActive && !isPlaying && (
                    <div className="absolute top-0 left-0 h-1 w-full bg-brand-red" />
                  )}

                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-xs uppercase tracking-wider text-brand-sky">
                      {slide.tabLabel}
                    </span>
                    <ChevronRight className={`w-3.5 h-3.5 text-white/50 transition-transform ${
                      isActive ? 'translate-x-1 text-brand-red' : 'group-hover:translate-x-1'
                    }`} />
                  </div>
                  <div className="font-body text-xs text-gray-300 truncate mt-0.5">
                    {slide.eyebrow}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
};
