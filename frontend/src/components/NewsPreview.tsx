import React from 'react';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { NEWS_STORIES } from '../data/siteData';

export const NewsPreview: React.FC = () => {
  return (
    <section id="noticias" className="w-full bg-white py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado con Botón a Blog (Inspirado en Screenshot 2) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-heading font-extrabold uppercase tracking-[3px] text-brand-royal">
              HISTORIAS DE CAMBIO
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-brand-navy tracking-tight mt-1">
              NOTICIAS Y ACTUALIDAD
            </h2>
            <p className="font-body text-gray-600 text-sm sm:text-base mt-2">
              Conoce los resultados, testimonios y convocatorias más recientes de United Way Chihuahua.
            </p>
          </div>

          <a 
            href="#todas-noticias"
            className="self-start sm:self-auto border-2 border-brand-royal text-brand-royal hover:bg-brand-royal hover:text-white px-6 py-2.5 rounded-full font-heading font-extrabold text-xs uppercase tracking-[2px] transition-all whitespace-nowrap"
          >
            MÁS NOTICIAS Y REPORTES
          </a>
        </div>

        {/* Grid de 3 Noticias Principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_STORIES.map((item) => (
            <article 
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group"
            >
              <div>
                {/* Imagen de la noticia */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-brand-navy/90 text-white text-[10px] font-heading font-extrabold uppercase px-2.5 py-1 rounded-md backdrop-blur-sm tracking-wider flex items-center gap-1">
                    <Tag className="w-3 h-3 text-brand-sky" />
                    {item.category}
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="font-heading font-extrabold text-lg text-brand-navy group-hover:text-brand-royal transition-colors leading-snug mb-3">
                    {item.title}
                  </h3>

                  <p className="font-body text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              {/* Enlace Leer Más */}
              <div className="p-6 pt-0 mt-2">
                <a 
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-brand-royal group-hover:text-brand-navy transition-colors"
                >
                  Leer historia completa
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
