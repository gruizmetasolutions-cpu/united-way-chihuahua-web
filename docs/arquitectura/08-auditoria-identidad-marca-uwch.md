# 🔍 Auditoría Profunda de Identidad de Marca y UX/UI — Sitio Web United Way Chihuahua (`DEV-UWCHIHUAHUA`)

> **Proyecto / Nodo Resolve**: `United Way Chihuahua Web (DEV-UWCHIHUAHUA)` (`https://dev-uwchihuahua.dataholics.com.mx`)  
> **Marco Normativo de Auditoría**: [`MANUAL_MARCA_UNITED_WAY.md`](../marca/united-way/MANUAL_MARCA_UNITED_WAY.md) (*United Way Worldwide Brand Guidelines 2024 v1.4*, *Guía Local de Uso de Marca UWCH* y *Matriz Cromática Completa de 20 Muestras Pantone*)  
> **Fecha de Auditoría**: 05 de Noviembre de 2026  
> **Artefactos Auditados**: Bundle en vivo `/assets/index-BPvKPUl9.js` (`525.5 KB`), `/assets/index-UYrAOjLq.css` (`57.0 KB`), `/index.html`, `/logo-icon.svg`, `/favicon.svg` y `/robots.txt`.

---

## 1. Resumen Ejecutivo de Hallazgos

Al contrastar la versión actualmente desplegada en `https://dev-uwchihuahua.dataholics.com.mx` contra los **12 capítulos obligatorios del Manual Oficial de Identidad de Marca de United Way Chihuahua**, se identificaron **10 desviaciones estructurales, visuales, de accesibilidad y de enrutamiento** que han sido desglosadas en **10 tickets atómicos de remediación (`TKT-042` al `TKT-051`)**:

| Severidad | Categoría del Hallazgo | Impacto en el Sitio Actual (`dev-uwchihuahua.dataholics.com.mx`) | Ticket Resolve |
| :---: | :--- | :--- | :---: |
| 🔴 **CRÍTICA** | **1. Logotipo Oficial (*Circle of Hope* Saul Bass 2024 y Lockup 35 Años)** | `Header`, `Footer` y `GivecloudModal` renderizan un corazón genérico (`Lucide Heart`) dentro de un círculo CSS improvisado y texto HTML con `FONDOS UNIDOS CHIHUAHUA I.A.P.` incrustado, violando los **Don'ts #2, #5, #10 y #11**. Además, `/favicon.svg` muestra el ícono morado de Vite (`#863bff`). | [`TKT-042`](../tickets/TKT-042.md) |
| 🔴 **CRÍTICA** | **2. Violaciones WCAG 2.1: Texto Blanco `#FFFFFF` sobre Fondo Dorado `#FFBA00`** | **12 componentes** en Portada, `/nosotros/`, `/nuestro-impacto/`, `/oportunidades-de-formacion-para-la-juventud/`, los 6 programas del Pilar 1, `/unete/`, `/contacto-empresas/` y `/torneo-de-golf/` aplican `text-white` sobre fondo `#FFBA00` (Ratio `1.74:1 < 1.8:1`, **Falla Crítica WCAG prohibida en Sección 8**). | [`TKT-044`](../tickets/TKT-044.md) |
| 🔴 **CRÍTICA** | **3. 16 Rutas Canónicas de Programas en 404 (`uwchihuahua.org`)** | El router en vivo solo registra los slugs preliminares (`todos-a-leer`, `jugando-ludoteca`, `becas`, etc.) y devuelve **404** en los **16 slugs canónicos reales de `uwchihuahua.org`** (`/nacer-aprendiendo/`, `/escuelas-vibrantes/`, `/mi-escuela-mi-futuro/`, `/lectura-para-todos/`, `/educacion-steam/`, etc.). | [`TKT-050`](../tickets/TKT-050.md) |
| 🟠 **ALTA** | **4. Matriz Cromática incompleta (Faltan 20 Muestras Pantone `--color-uwch-*`)** | `index.css` solo declara 12 variables parciales y emplea **30 clases genéricas de Tailwind** (`bg-emerald-50`, `bg-amber-50`, `bg-red-50`, `text-gray-500`) en lugar de la paleta Pantone oficial (`#C6F7DA`/`#156B4C`, `#FFD7D0`/`#D12626`, `#FFEAD0`/`#221E1F`, `#646567`, `#CCCCCC`). | [`TKT-043`](../tickets/TKT-043.md) |
| 🟠 **ALTA** | **5. Botón Primario "Únete / Voluntariado" sin Token Dorado `#FFBA00`** | El Manual (Sección 6.1 y 8) asigna el **Dorado Principal `#FFBA00` con texto `#221E1F`** (Ratio `> 9:1` AAA) al botón **"Únete / Registro"**, reservando el **Rojo `#FD372C`** para **"Donar Ahora"**. Actualmente `Header` y vistas clave no diferencian ambos CTAs con la tríada cromática primaria. | [`TKT-045`](../tickets/TKT-045.md) |
| 🟠 **ALTA** | **6. Tipografía `Antonio Bold` sin `ALL-CAPS` en 28 Instancias** | La Lámina 2 y Sección 9.1 exigen que `Antonio` (`font-display`) se aplique **estrictamente en MAYÚSCULAS (`ALL-CAPS`)** y jamás en cursivas, reservando `Palanquin` para encabezados secundarios en oración y cuerpo. Se detectaron **28 elementos `font-display` en minúsculas**. | [`TKT-046`](../tickets/TKT-046.md) |
| 🟠 **ALTA** | **7. Ausencia de Esquema Normado de Co-Branding Corporativo** | La Sección 11 y Lámina 1 exigen que las alianzas empresariales respeten **paridad de altura con la caja tipográfica de United Way**, **línea divisoria vertical `#CCCCCC`** y **margen libre $U$**. En Portada y `/contacto-empresas/` solo se muestran nombres en texto plano. | [`TKT-047`](../tickets/TKT-047.md) |
| 🟡 **MEDIA** | **8. Geometría Derivada (*Arc, Arrow, Circle*) vs. *Bullseyes* y `blur-3xl`** | La Sección 10.1 y Don't #7 prohíben hacer dianas concéntricas cerradas (*No bullseyes*) y efectos difusos (`blur-3xl`). `ImpactSelector` usa anillos concéntricos punteados y `ProgramaDetalleTemplate` usa manchas `blur-3xl`. | [`TKT-048`](../tickets/TKT-048.md) |
| 🟠 **ALTA** | **9. 64 Fotos de Stock Genérico de Unsplash y 6 `<img>` sin Anclaje Facial** | La Sección 10.2 exige fotografía auténtica de Chihuahua (cero modelos de estudio de stock) y `object-position: center 25%` en el 100% de las fotos. El sitio usa **64 URLs de Unsplash**, **0 fotos de `uwchihuahua.org`** y **6 de 11 `<img>` carecen de `object-[center_25%]`**. | [`TKT-049`](../tickets/TKT-049.md) |
| 🔴 **CRÍTICA** | **10. Omisión de `noindex, nofollow` en Vivo y Canales Oficiales de Marca** | El `index.html` desplegado en `dev-uwchihuahua.dataholics.com.mx` **no tiene `<meta name="robots" content="noindex, nofollow" />`**, y faltan las 6 redes oficiales (`@unitedwaychihuahua` incl. TikTok, LinkedIn, YouTube) y los contactos de Marca (Sara Romero y Nancy Fernández). | [`TKT-051`](../tickets/TKT-051.md) |

---

## 2. Detalle Técnico por Capítulo del Manual de Marca

### 2.1 Auditoría de Logotipo (*Circle of Hope* — Secciones 2, 3, 4 y 5)
- **Estado actual en `live_bundle.js`**:
  - `Header`: Renderiza `<div className="w-10 h-10 rounded-full bg-brand-navy ..."><div className="w-8 h-8 rounded-full border-2 border-pillar-yellow ..."><Heart className="w-4 h-4 text-brand-red fill-brand-red" /></div></div>` acompañado de 3 `<span>` (`UNITED WAY` / `CHIHUAHUA` / `FONDOS UNIDOS CHIHUAHUA I.A.P.`).
  - `Footer`: Renderiza `<div className="w-10 h-10 rounded-full bg-white ..."><Heart className="w-5 h-5 text-brand-red fill-brand-red" /></div>` con los mismos 3 `<span>`.
  - `/logo-icon.svg`: Contiene un trazo geométrico improvisado (`<circle cx="32" cy="32" r="30" fill="#21296B" stroke="#FFBA00".../>`) que no corresponde al diseño de Saul Bass.
  - `/favicon.svg`: Contiene el logotipo morado (`#863bff`) de Vite.
- **Violaciones directas a la Guía de Uso de Marca (Láminas 1 y 2)**:
  - **Don't #2 y #5**: Alteración y sustitución de los 3 elementos nucleares del isotipo (*Arcoíris de la Esperanza*, *Mano Solidaria*, *Persona Activa*).
  - **Don't #10**: Encerrar el símbolo en contenedores rígidos no autorizados.
  - **Don't #11**: Alterar el lockup tipográfico oficial (`UNITED WAY` en `Antonio Bold` mayúsculas + `Chihuahua` en `Palanquin Regular` caja mixta).
- **Corrección (`TKT-042`)**:
  - Usar `/assets/brand/logo-uwch-estandar-color.png` y `/assets/brand/logo-uwch-35.png` en `Header` (`min-w-[200px]`, padding de aislamiento equivalente a la altura $U$).
  - Usar `/assets/brand/logo-uwch-estandar-blanco-color.png` y `/assets/brand/logo-uwch-35-white-color.png` en `Footer`.
  - Usar `/assets/brand/isotipo-circulo-esperanza-color.png` en `GivecloudModal` y espacios $< 100\text{ px}$.

### 2.2 Auditoría de Accesibilidad y Contraste WCAG 2.1 (Sección 8)
El Manual Oficial especifica:
> 🚫 **Texto `#FFFFFF` sobre Fondo `#FFBA00` (Dorado)**: Ratio $< 1.8:1$ (**Falla Crítica WCAG**). Jamás colocar texto blanco sobre fondo dorado; siempre debe ser negro `#221E1F` o azul oscuro `#21296B`.  
> 🚫 **Texto `#FFBA00` sobre Fondo `#FFFFFF`**: Ilegible para personas con debilidad visual. Solo permitido sobre fondos oscuros (`#0044B5` o `#21296B`).

Se localizaron **12 puntos exactos en el código en vivo** donde `backgroundColor` recibe `#FFBA00` con `text-white` fijo:
1. `HeroRotor`: Badge superior del Slide 1 (`c.themeColor === '#FFBA00'` + `text-white`).
2. `FeatureCampaign`: Badge de métrica `+28,500` en la primera tarjeta (`e.color === '#FFBA00'` + `text-white`).
3. `NosotrosPage` (`/nosotros/`): Ícono de tarjeta `Inclusión y Equidad` (`e.color === '#FFBA00'` + `text-white`), tarjeta `ODS 4` (`#FFBA00` + `text-white`) y número estadístico en `#FFBA00` sobre fondo blanco `bg-white`.
4. `NuestroImpactoPage` (`/nuestro-impacto/`): Badge `PILAR ESTRATÉGICO 01` (`#FFBA00` + `text-white`), botón `Explorar Hub del Pilar` (`#FFBA00` + `text-white`) y las 6 píldoras `Oportunidades` del buscador de 16 programas (`e.pilarColor === '#FFBA00'` + `text-white`).
5. `PilarHubTemplate` (`/oportunidades-de-formacion-para-la-juventud/`): Badge `ENFOQUE ESTRATÉGICO` (`#FFBA00` + `text-white`) y los 6 tags de subprogramas (`Lectura Infantil`, `Primera Infancia`, `Continuidad`, `Infraestructura`, `Itinerante`, `Tecnología`).
6. `ProgramaDetalleTemplate` (6 rutas del Pilar 1): Badge `PROPÓSITO Y DIAGNÓSTICO` (`#FFBA00` + `text-white`) y los 4 círculos numerados `01`–`04` de metodología (`#FFBA00` + `text-white`).
7. `UnetePage` (`/unete/`): Badge, ícono y botón CTA de la tarjeta con acento `#FFBA00`.
8. `ContactoEmpresasPage` (`/contacto-empresas/`): Ícono del paso con color `#FFBA00` y `text-white`.
9. `TorneoGolfPage` (`/torneo-de-golf/`): Badge `Nivel 2` del paquete `Patrocinador Oro` (`#FFBA00` + `text-white`).

### 2.3 Auditoría de Tipografía (`Antonio Bold ALL-CAPS` y `Palanquin` — Sección 9 y Lámina 2)
Se detectaron **28 elementos con `font-display` (`Antonio`) sin la clase `uppercase`**, provocando que `Antonio` se renderice en caja mixta (minúsculas) en:
- Nombres de directivos y consejeros en `/nosotrosequipo/` y `/patronato/`.
- Títulos de tarjetas en `/nosotros/`, `/gobernanza/`, `/unete/`, `/contacto/` y `/contacto-empresas/`.
- Preguntas del acordeón en `/preguntas-frecuentes/`.
- Datos clave y nombres de paquetes en `/torneo-de-golf/`.
- Botones de montos en `GivecloudModal` y `/donacion/`.

---

## 3. Índice de Tickets de Remediación Generados para Resolve (`TKT-042` – `TKT-051`)

| Folio | Tipo | Asunto para Dataholics Resolve (`resolve@dataholics.com.mx`) |
| :---: | :---: | :--- |
| **[`TKT-042`](../tickets/TKT-042.md)** | `UI/BRAND` | `[United Way Chihuahua Web (DEV-UWCHIHUAHUA)] [TKT-042] UI/BRAND: Sustitución de Logotipo Placeholder por Lockups Oficiales Saul Bass 2024 (Circle of Hope y 35 Aniversario) en Header, Footer, Modal y Favicon` |
| **[`TKT-043`](../tickets/TKT-043.md)** | `UI/BRAND` | `[United Way Chihuahua Web (DEV-UWCHIHUAHUA)] [TKT-043] UI/BRAND: Implementación de la Matriz Cromática Oficial de 20 Muestras Pantone (--color-uwch-*) en Tailwind CSS v4 (@theme) y Variables Globales` |
| **[`TKT-044`](../tickets/TKT-044.md)** | `A11Y/BRAND` | `[United Way Chihuahua Web (DEV-UWCHIHUAHUA)] [TKT-044] A11Y/BRAND: Corrección de 12 Violaciones Críticas WCAG 2.1 (Texto Blanco #FFFFFF sobre Fondo Dorado #FFBA00 y Texto Dorado sobre Blanco)` |
| **[`TKT-045`](../tickets/TKT-045.md)** | `UI/BRAND` | `[United Way Chihuahua Web (DEV-UWCHIHUAHUA)] [TKT-045] UI/BRAND: Estandarización del Botón Oficial "Únete / Voluntariado" en Dorado (#FFBA00 + Texto #221E1F) vs. Botón "Donar Ahora" en Rojo (#FD372C)` |
| **[`TKT-046`](../tickets/TKT-046.md)** | `UI/BRAND` | `[United Way Chihuahua Web (DEV-UWCHIHUAHUA)] [TKT-046] UI/BRAND: Blindaje Tipográfico Saul Bass — Regla Estricta ALL-CAPS en Antonio Bold (28 Instancias) y Jerarquía Palanquin en Subtítulos y Cuerpo` |
| **[`TKT-047`](../tickets/TKT-047.md)** | `UI/BRAND` | `[United Way Chihuahua Web (DEV-UWCHIHUAHUA)] [TKT-047] UI/BRAND: Implementación del Componente Normado de Co-Branding Corporativo (Paridad de Altura, Línea Divisoria #CCCCCC y Margen U)` |
| **[`TKT-048`](../tickets/TKT-048.md)** | `UI/BRAND` | `[United Way Chihuahua Web (DEV-UWCHIHUAHUA)] [TKT-048] UI/BRAND: Geometría Derivada del Logotipo (El Arco, La Flecha y El Círculo Limpio) y Eliminación de Dianas Concéntricas (Bullseyes) y Efectos Blur` |
| **[`TKT-049`](../tickets/TKT-049.md)** | `UI/BRAND` | `[United Way Chihuahua Web (DEV-UWCHIHUAHUA)] [TKT-049] UI/BRAND: Sustitución de las 64 Fotografías de Stock de Unsplash por Acervo Fotográfico Auténtico de Chihuahua y Anclaje Facial 100% (object-[center_25%])` |
| **[`TKT-050`](../tickets/TKT-050.md)** | `FEAT/ROUTING` | `[United Way Chihuahua Web (DEV-UWCHIHUAHUA)] [TKT-050] FEAT/ROUTING: Registro de los 16 Slugs Canónicos Oficiales de Programas de uwchihuahua.org (TKT-015..TKT-030) que actualmente devuelven 404 en Vivo` |
| **[`TKT-051`](../tickets/TKT-051.md)** | `SEO/BRAND` | `[United Way Chihuahua Web (DEV-UWCHIHUAHUA)] [TKT-051] SEO/BRAND: Inyección de Bloqueo noindex/nofollow en <head> de Pruebas + Contactos Oficiales de Marca y 6 Redes Sociales (@unitedwaychihuahua)` |
