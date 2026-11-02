# Guía Maestra de Integridad UX/UI y Sistema de Diseño para Tickets Resolve (`DEV-UWCHIHUAHUA`)

**Project Name**: `United Way Chihuahua Web (DEV-UWCHIHUAHUA)` — Nodo `#5` (`dev-uwchihuahua.dataholics.com.mx`)  
**Repositorio Fuente**: `https://github.com/gruizmetasolutions-cpu/united-way-chihuahua-web`  
**Propósito**: Documento adjunto obligatorio para todos los tickets atómicos (`TKT-004` al `TKT-041`). Garantiza que cualquier vista nueva mantenga **coherencia visual, tipográfica, cromática y estructural al 100%** con la Portada (`TKT-003`) ya construida en `frontend/`.

---

## 1. Reglas Inquebrantables del Shell y Stack Técnico

1. **Stack Inamovible**: Vite 8 + React 19 + TypeScript + Tailwind CSS v4 (`@tailwindcss/vite`) + `lucide-react`. **Prohibido** instalar librerías de componentes externas (Bootstrap, MUI, AntD, Chakra) o sobrescribir `frontend/src/index.css`.
2. **Shell Persistente Obligatorio**:
   - Toda vista debe renderizarse dentro del layout principal conservando intactos `<Header onOpenDonate={...} />`, `<Footer />` y `<GivecloudModal />`.
   - Debido a que `<Header />` es `fixed top-0 left-0 z-50`, toda página nueva **DEBE** iniciar su primer bloque o Hero con `pt-[88px] lg:pt-[110px]`.
3. **Protección Anti-Indexación en Pruebas**:
   - Nunca remover `<meta name="robots" content="noindex, nofollow" />` de `frontend/index.html` ni modificar `frontend/public/robots.txt` mientras el proyecto esté en `DEV-UWCHIHUAHUA`.

---

## 2. Tokens Oficiales de Color (`frontend/src/index.css`)

Usa **exclusivamente** las clases utilitarias generadas por el bloque `@theme` de `frontend/src/index.css` (extraídas de `post-8.css` de `uwchihuahua.org`):

| Token en Tailwind CSS v4 | Valor Hex | Uso Obligatorio en Componentes |
| :--- | :---: | :--- |
| `bg-brand-navy` / `text-brand-navy` | `#21296B` | Fondos de Heros, máscaras curvas, titulares H2/H3, tarjetas oscuras y Footer |
| `bg-brand-royal` / `text-brand-royal` | `#0044B5` | Botones secundarios, enlaces interactivos, badges e íconos institucionales |
| `bg-brand-mid` / `text-brand-mid` | `#5082F0` | Bloques de acento medio, bordes activos y estados hover secundarios |
| `bg-brand-sky` / `text-brand-sky` | `#A7D2FF` | Eyebrows sobre fondo oscuro, íconos en barra superior y acentos celestes |
| `bg-brand-cream` / `bg-brand-cream/40` | `#EDE8DA` | Fondos cálidos alternos para secciones destacadas (RSE, Aliados, Contexto) |
| `bg-brand-red` / `hover:bg-brand-red-hover` | `#FD372C` / `#D12626` | **Exclusivo** para botones primarios de donación (`DONA AQUÍ`) y urgencias |
| `text-brand-dark` / `text-brand-muted` | `#221E1F` / `#838694` | Texto principal de lectura y texto secundario descriptivo |
| `pillar-yellow` | `#FFBA00` | Pilar 1 (*Oportunidades para Jóvenes*) y cifras gigantes sobre fondo azul |
| `pillar-orange` | `#F47925` | Pilar 3 (*Resiliencia Comunitaria*) y campañas de emergencia |
| `pillar-green` | `#009464` | Pilar 4 (*Voluntariado y Finanzas*) y programas ambientales |
| `pillar-purple` | `#6C76D3` | Convocatorias especiales, liderazgo juvenil y acentos de voluntariado |

---

## 3. Jerarquía Tipográfica Exacta (ADN United Way)

| Nivel | Clase de Fuente | Clases Tailwind Exactas | Ejemplo de Uso |
| :--- | :--- | :--- | :--- |
| **Eyebrow / Categoría Superior** | `font-heading` (`Nunito Sans`) | `text-xs font-heading font-extrabold uppercase tracking-[3px] text-brand-royal` | `NUESTRA HISTORIA`, `PILAR ESTRATÉGICO` |
| **Titular Hero (H1)** | `font-display` (`Antonio`) | `font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-[0.95]` | `UNIDOS TRANSFORMAMOS CHIHUAHUA` |
| **Título de Sección (H2)** | `font-display` (`Antonio`) | `font-display text-4xl sm:text-5xl font-bold uppercase text-brand-navy tracking-tight` | `CONSEJO DIRECTIVO`, `¿CÓMO LO HACEMOS?` |
| **Título de Tarjeta (H3)** | `font-display` (`Antonio`) | `font-display text-2xl font-bold uppercase text-brand-navy tracking-tight` | `ACTITUD DE SERVICIO`, `TODOS A LEER` |
| **Cifra Gigante de KPI** | `font-display` (`Antonio`) | `font-display text-5xl sm:text-6xl font-bold text-pillar-yellow tracking-tight leading-none` | `+92,775`, `35+ AÑOS`, `162` |
| **Párrafo Editorial** | `font-body` (`Palanquin`) | `font-body text-gray-600 text-sm sm:text-base leading-relaxed` | Descripciones de programas e historia |

---

## 4. Patrones de Componentes Reutilizables (Copy-Paste Estructural)

### 4.1. Hero Estándar para Páginas Internas (`InternalHero`)
Mantiene la misma **máscara curva institucional con `backdrop-blur-md`** y **encuadre fotográfico protegido (`object-[center_25%]`)** del `HeroRotor.tsx` de la portada:

```tsx
<section className="relative w-full pt-[88px] lg:pt-[110px] bg-brand-navy overflow-hidden">
  <div className="relative min-h-[380px] lg:min-h-[440px] flex items-center">
    {/* Fotografía con protección de rostros */}
    <div className="absolute inset-0 z-0">
      <img
        src={heroImage}
        alt={title}
        className="w-full h-full object-cover object-[center_25%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-brand-navy/30" />
    </div>

    {/* Contenido con Máscara Institucional (Contraste WCAG AAA) */}
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="max-w-2xl">
        <span
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-heading font-extrabold uppercase tracking-[2px] text-white mb-4"
          style={{ backgroundColor: accentColor || '#0044B5' }}
        >
          {eyebrow}
        </span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-[0.95] mb-4">
          {title}
        </h1>
        <p className="font-body text-base sm:text-lg text-gray-200 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  </div>
</section>
```

### 4.2. Tarjetas con "Sal y Pimienta" (Valores, Programas, Consejeros, Áreas)
Mismo patrón de elevación, borde superior de color y sombras usado en `ImpactSelector.tsx` y `CorporateRSE.tsx`:

```tsx
<div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 border border-gray-100 relative overflow-hidden group">
  <div className="absolute top-0 left-0 right-0 h-1.5" style={{ backgroundColor: accentColor }} />
  {/* Contenido de tarjeta */}
</div>
```

### 4.3. Botones Oficiales (3 Variantes Únicas)
- **Botón Primario Donación (Rojo)**:
  `bg-brand-red hover:bg-brand-red-hover text-white font-heading font-extrabold text-xs uppercase px-7 py-3.5 rounded-full tracking-[2px] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5`
- **Botón Primario Institucional (Azul Real / Marino)**:
  `bg-brand-royal hover:bg-brand-navy text-white font-heading font-extrabold text-xs uppercase px-7 py-3.5 rounded-full tracking-[2px] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5`
- **Botón Secundario Outline (Píldora)**:
  `border-2 border-brand-royal text-brand-royal hover:bg-brand-royal hover:text-white font-heading font-extrabold text-xs uppercase px-6 py-2.5 rounded-full tracking-[2px] transition-all`

---

## 5. Checklist de Verificación UX/UI antes de Cerrar Cualquier Ticket
- [ ] ¿Respeta los contenedores `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` y espaciados `py-16 lg:py-24`?
- [ ] ¿Todos los titulares `H1/H2/H3` y números de KPIs usan `font-display` (`Antonio`) en mayúsculas?
- [ ] ¿Todos los botones y badges usan `font-heading` (`Nunito Sans`) con `tracking-[2px]` y `rounded-full`?
- [ ] ¿Las fotografías de personas usan `object-cover object-[center_25%]` sin texto encimado directamente sobre rostros?
- [ ] ¿Pasa `.\verificar.ps1` (`tsc --noEmit` + `oxlint`) con **0 errores y 0 advertencias**?
