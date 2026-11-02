# United Way Chihuahua (`uwchihuahua.org`) — Sitio Web Institucional & Sistema de Plantillas

Repositorio oficial para la clonación, modernización UX/UI y estandarización de plantillas modulares de **United Way Chihuahua (Fondos Unidos Chihuahua I.A.P.)**, desarrollado por **Dataholics**.

---

## 📂 Estructura del Proyecto

```text
├── docs/
│   ├── arquitectura/
│   │   ├── 01-mapa-del-sitio.md                   # Inventario completo de 71 URLs y arquitectura de información
│   │   ├── 02-radiografia-funcional-y-contenido.md # Anatomía de componentes, métricas y 16 subprogramas
│   │   ├── 03-sistema-visual-y-marca.md           # Tokens de color (post-8.css) y tipografías oficiales
│   │   ├── 04-diagnostico-y-propuesta-tecnica.md  # Auditoría técnica (404s detectados) y separación Fase 1 / Fase 2
│   │   ├── 05-minuta-acuerdos-y-requerimientos.md # Acuerdos formales con Coordinación de Comunicación UWCH
│   │   └── 06-especificacion-ux-ui-y-plantillas.md # Especificación de los 6 componentes y plantillas maestras
│   └── tickets/                                   # Trazabilidad formal de cambios (TKT-001 a TKT-003)
├── frontend/                                      # Aplicación Web (Vite + React 19 + TypeScript + Tailwind CSS v4)
│   ├── src/
│   │   ├── components/                            # Componentes modulares de la Portada e Interfaz
│   │   └── data/siteData.ts                       # Datos tipados centralizados (Slides, Pilares, KPIs, RSE)
├── verificar.ps1                                  # Compuerta de calidad integral (Windows PowerShell)
└── verificar.sh                                   # Compuerta de calidad integral (Linux / macOS)
```

---

## 🚀 Cómo Ejecutar el Proyecto en Local

### 1. Instalar dependencias e iniciar servidor de desarrollo

```bash
cd frontend
npm install
npm run dev
```

La aplicación estará disponible en `http://localhost:5173/`.

### 2. Ejecutar Compuerta de Calidad (`Typecheck` + `Lint`)

En **Windows (PowerShell)**:
```powershell
.\verificar.ps1
```

En **Linux / macOS**:
```bash
./verificar.sh
```

---

## 🎨 Componentes Implementados en la Portada (`Home`)

1. **Sticky Header & Mega-Dropdown (`Header.tsx`)**: Navegación persistente con menú desplegable de los 4 pilares y sus 16 programas (corrigiendo los 4 enlaces `404` detectados en producción) y botón primario `DONA AQUÍ`.
2. **Hero Rotor Dinámico (`HeroRotor.tsx`)**: Carrusel multi-slide con máscara curva institucional (contraste WCAG AAA), protección de encuadre fotográfico para rostros y barra inferior de 4 pestañas interactivas (*Torneo de Golf 2026*, *Fondo de Emergencias*, *Visión 2027*, *Alianzas Corporativas*).
3. **Triada de Acción Rápida (`ActionTriad.tsx`)**: Bloques de conversión directa (*Dona Hoy*, *Sé Voluntario*, *Suma a tu Empresa*).
4. **Selector Interactivo de Impacto (`ImpactSelector.tsx`)**: Vista conmutable entre el **Selector Circular Insignia de United Way** y la **Cuadrícula de 4 Tarjetas ("con sal y pimienta")**.
5. **Banda de Numeralia Ondulada (`WaveStats.tsx`)**: Transición bicolor con cifras de impacto en tipografía `Antonio` (`+92,775` beneficiarios, `162` organizaciones, `8,708` horas de voluntariado, `69+` empresas).
6. **Campaña Destacada (`FeatureCampaign.tsx`)**: Bloque split-screen para convocatorias y alianzas educativas.
7. **Portal Empresarial / RSE (`CorporateRSE.tsx`)**: Propuesta de valor corporativa en 3 ejes (*Inversión Social 100% deducible SAT*, *Voluntariado Corporativo*, *Campaña en Nómina / Workplace Giving*) y muro de empresas aliadas en Chihuahua.
8. **Módulo de Noticias (`NewsPreview.tsx`)**: Previsualización desacoplada de historias de impacto.
9. **Modal de Donación Givecloud (`GivecloudModal.tsx`)**: Embudo de aportación conectado con `unitedwaychihuahua.givecloud.co`.
10. **Footer Institucional (`Footer.tsx`)**: Datos de contacto en Chihuahua, constancia de Donataria Autorizada SAT y enlaces de transparencia.
