# Sistema Visual, Tokens de Diseño y Marca: United Way Chihuahua

Este documento recopila la especificación formal del sistema de diseño de **United Way Chihuahua**, obtenido directamente del análisis de los estilos globales de producción (`post-8.css`), listo para ser implementado en Tailwind CSS o CSS Modules.

---

## 1. Paleta de Colores Semántica y Tokens Oficiales

### Colores Principales (Core Brand)
| Token CSS Original | Nombre Semántico | Hexadecimal | Aplicación en Interfaz |
| :--- | :--- | :--- | :--- |
| `--e-global-color-primary` | `brand-navy` | `#21296B` | Color principal de marca, encabezados H1/H2, barras de navegación y pie de página |
| `--e-global-color-secondary` | `surface-cream` | `#EDE8DA` | Fondo de secciones institucionales destacadas, tarjetas de impacto suave |
| `--e-global-color-1071aae` | `brand-royal` | `#0044B5` | Azul vibrante para enlaces activos, botones secundarios e iconos principales |
| `--e-global-color-269fb8e` | `brand-blue-mid` | `#5082F0` | Bordes decorativos, estados focus y botones hover |
| `--e-global-color-accent` | `brand-sky` | `#A7D2FF` | Acento celeste para fondos claros y badges |
| `--e-global-color-6c55ed8` | `brand-red` | `#FD372C` | Botones de llamado a la acción primario (`Dona aquí`, botones urgentes) |
| `--e-global-color-ed3ad08` | `brand-red-dark` | `#D12626` | Estado hover de los botones de donación y acentos de alerta |

### Colores Temáticos por Pilar de Impacto Social
| Token CSS Original | Nombre Semántico | Hexadecimal | Pilar / Eje Asociado |
| :--- | :--- | :--- | :--- |
| `--e-global-color-5240177` | `pillar-yellow` | `#FFBA00` | Educación y Juventud (Becas Eleva, Ludotecas) |
| `--e-global-color-752c5e5` | `pillar-orange` | `#F47925` | Resiliencia Comunitaria y Seguridad Vial |
| `--e-global-color-041ad44` | `pillar-green` | `#009464` | Comunidad Saludable, Medioambiente y Reforestación |
| `--e-global-color-435221a` | `pillar-green-light` | `#82D8A4` | Acentos verdes, éxito y biodiversidad |
| `--e-global-color-6c860bb` | `pillar-purple` | `#6C76D3` | Voluntariado Comunitario y Cultura Cívica |

### Escala Neutra y Superficies
| Token CSS Original | Nombre Semántico | Hexadecimal | Aplicación |
| :--- | :--- | :--- | :--- |
| `--e-global-color-dd1d809` | `text-dark` | `#221E1F` | Titulares y textos de alta densidad (casi negro) |
| `--e-global-color-text` | `text-body` | `#838694` | Texto de lectura en párrafos y descripciones |
| `--e-global-color-a038530` | `text-muted` | `#646567` | Metadatos, subtítulos menores y pie de foto |
| `--e-global-color-da0949a` | `border-gray` | `#CCCCCC` | Líneas divisorias y bordes de tarjetas |
| `--e-global-color-06fa32e` | `border-light` | `#DFDFDF` | Bordes sutiles de inputs y separadores |
| `--e-global-color-4951816` | `surface-gray` | `#F4F4F4` | Fondo de tarjetas neutras y tablas alternadas |
| `--e-global-color-93a5e35` | `surface-white` | `#FFFFFF` | Fondo blanco principal y tarjetas destacadas |

---

## 2. Tipografía Oficial

El sitio utiliza una combinación de 3 fuentes con roles estrictamente delimitados:

### A. Tipografía Display / Titulares: `Antonio`
- **Familia**: `'Antonio', sans-serif`
- **Características**: Fuente tipográfica sans-serif condensada, de trazos geométricos rectos e impacto visual masivo.
- **Uso Obligatorio**:
  - Encabezados principales de portada y páginas (H1).
  - Números gigantes en contadores de métricas (`+$7,992,087`, `488,161`, `+124,000`).
  - Titulares de campañas destacadas (*TORNEO DE GOLF*, *COLOMBIA NOS UNE*).
- **Pesos**: `700 (Bold)`.

### B. Tipografía de Navegación, Subtítulos y Botones: `Nunito Sans`
- **Familia**: `'Nunito Sans', sans-serif`
- **Características**: Sans-serif humanista con excelente legibilidad y soporte completo para caracteres en español.
- **Uso Obligatorio**:
  - Subtítulos de sección (H2, H3, H4, H5, H6).
  - Barra de menú de navegación superior y pie de página.
  - Botones y llamadas a la acción (en mayúsculas con `letter-spacing: 3px` o `tracking-widest`).
  - Etiquetas y badges de pilares de impacto.
- **Pesos**: `500 (Medium)`, `600 (SemiBold)`, `700 (Bold)`.

### C. Tipografía de Párrafos y Lectura Editorial: `Palanquin`
- **Familia**: `'Palanquin', sans-serif`
- **Características**: Tipografía diseñada para lectura de cuerpo de texto fluida, clara y descansada.
- **Uso Obligatorio**:
  - Párrafos de descripción institucional.
  - Justificación de proyectos y metodologías de trabajo.
  - Términos legales, avisos de privacidad y preguntas frecuentes.
- **Pesos**: `400 (Regular)`, `600 (SemiBold)`.

---

## 3. Escala Tipográfica Responsiva

| Nivel | Escritorio (Desktop) | Tableta (Tablet < 1024px) | Móvil (Mobile < 767px) | Interlineado |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Display (H1)** | `55px` (Antonio Bold) | `47px` | `42px` | `1.1em` |
| **Título de Sección (H2)** | `32px` - `36px` | `30px` | `26px` | `1.2em` |
| **Subtítulo / Módulo (H3)** | `24px` | `22px` | `20px` | `1.3em` |
| **Título de Tarjeta (H4)** | `20px` - `22px` | `18px` | `18px` | `1.3em` |
| **Cuerpo de Texto Regular** | `16px` (Palanquin) | `15px` | `14px` | `1.5em` |
| **Botones y CTAs** | `13px` - `14px` (Uppercase) | `13px` | `12px` | `1.0em` (`letter-spacing: 3px`) |
| **KPIs / Números de Impacto** | `48px` - `56px` (Antonio) | `40px` | `36px` | `1.0em` |

---

## 4. Estilos de Botones y Componentes Clave

```css
/* Botón Primario de Donación (Rojo Acción) */
.btn-primary-donate {
  background-color: #FD372C;
  color: #FFFFFF;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding: 14px 28px;
  border-radius: 6px;
  transition: all 250ms ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-primary-donate:hover {
  background-color: #D12626;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(253, 55, 44, 0.25);
}

/* Botón Secundario Institucional (Azul Real) */
.btn-secondary-brand {
  background-color: #0044B5;
  color: #FFFFFF;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding: 14px 28px;
  border-radius: 6px;
  transition: all 250ms ease-in-out;
}

.btn-secondary-brand:hover {
  background-color: #21296B;
  transform: translateY(-2px);
}
```

---

## 5. Configuración de Tailwind CSS Lista para Usar

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#21296B",
          royal: "#0044B5",
          mid: "#5082F0",
          sky: "#A7D2FF",
          red: "#FD372C",
          "red-dark": "#D12626",
          cream: "#EDE8DA",
        },
        pillar: {
          yellow: "#FFBA00",
          orange: "#F47925",
          green: "#009464",
          "green-light": "#82D8A4",
          purple: "#6C76D3",
        },
        surface: {
          dark: "#221E1F",
          body: "#838694",
          muted: "#646567",
          border: "#CCCCCC",
          light: "#F4F4F4",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        display: ["Antonio", "sans-serif"],
        heading: ["Nunito Sans", "sans-serif"],
        body: ["Palanquin", "sans-serif"],
      },
      letterSpacing: {
        cta: "3px",
      },
      maxWidth: {
        container: "1140px",
      },
    },
  },
  plugins: [],
};
```
