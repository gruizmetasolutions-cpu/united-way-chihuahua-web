# Índice Maestro de Tickets Atómicos (1 Ruta por Ticket) — `DEV-UWCHIHUAHUA`

**Project Name en Resolve ServiceDesk (`resolve.dataholics.com.mx`)**: `United Way Chihuahua Web (DEV-UWCHIHUAHUA)` (Nodo `#5`)  
**Entorno de Pruebas (No-Indexado)**: `dev-uwchihuahua.dataholics.com.mx`  
**Guía Maestra de Integridad UX/UI Adjunta en todos los tickets**: [`docs/arquitectura/07-guia-integridad-ux-ui-resolve.md`](../arquitectura/07-guia-integridad-ux-ui-resolve.md)

---

## Resumen de Avance
- **Completados (`TKT-001` a `TKT-003`)**: `3` tickets (Incluye Ruta `#1`: `/` Portada Principal).
- **Pendientes Atómicos (`TKT-004` a `TKT-041`)**: `38` tickets (`1` base de enrutamiento + `37` rutas individuales).
- **Total del Proyecto**: `41` tickets (`38 / 38` rutas del sitio estático cubiertas).

| Ticket | Estatus | Ruta Objetivo | Título del Ticket |
| :-: | :-: | :--- | :--- |
| [`TKT-001`](./TKT-001.md) | ✅ Completado | Gobernanza / Docs | Scaffolding de Gobernanza, Radiografía Arquitectónica y Mapas de Sitio |
| [`TKT-002`](./TKT-002.md) | ✅ Completado | Arquitectura UX/UI | Especificación UX/UI, Minuta Formal y Sistema de Plantillas Modulares |
| [`TKT-003`](./TKT-003.md) | ✅ Completado | `/` (Ruta #1) | Implementación de Portada (Home) Interactiva y Sistema Visual United Way |
| [`TKT-004`](./TKT-004.md) | ⏳ Pendiente | `Infraestructura` | Infraestructura Base de Enrutamiento (react-router-dom), MainLayout, InternalHero y Redirecciones 404 |
| [`TKT-005`](./TKT-005.md) | ⏳ Pendiente | `/nosotros/` | Ruta #2 — Vista Institucional /nosotros/ (Historia, Misión, Visión 2027, Valores, Modelo Operativo y ODS) |
| [`TKT-006`](./TKT-006.md) | ⏳ Pendiente | `/nosotrosequipo/` | Ruta #3 — Vista Institucional /nosotrosequipo/ (Dirección Ejecutiva y Organigrama Operativo) |
| [`TKT-007`](./TKT-007.md) | ⏳ Pendiente | `/patronato/` | Ruta #4 — Vista Institucional /patronato/ (Directorio del Consejo Directivo) |
| [`TKT-008`](./TKT-008.md) | ⏳ Pendiente | `/gobernanza/` | Ruta #5 — Vista Institucional /gobernanza/ (Donataria Autorizada SAT, Auditorías y Códigos de Ética) |
| [`TKT-009`](./TKT-009.md) | ⏳ Pendiente | `/reporte_resultados/` | Ruta #6 — Vista Institucional /reporte_resultados/ (Visor y Descarga de Informes Anuales PDF) |
| [`TKT-010`](./TKT-010.md) | ⏳ Pendiente | `/nuestro-impacto/` | Ruta #7 — Portal General /nuestro-impacto/ (Hub Introductorio a los 4 Pilares y 16 Programas) |
| [`TKT-011`](./TKT-011.md) | ⏳ Pendiente | `/oportunidades-de-formacion-para-la-juventud/` | Ruta #8 — Hub Pilar 1 /oportunidades-de-formacion-para-la-juventud/ (Oportunidades para los más jóvenes) |
| [`TKT-012`](./TKT-012.md) | ⏳ Pendiente | `/comunidad-saludable/` | Ruta #9 — Hub Pilar 2 /comunidad-saludable/ (Comunidad Saludable y sus 6 Ejes de Intervención) |
| [`TKT-013`](./TKT-013.md) | ⏳ Pendiente | `/resiliencia-comunitaria/` | Ruta #10 — Hub Pilar 3 /resiliencia-comunitaria/ (Resiliencia Comunitaria) |
| [`TKT-014`](./TKT-014.md) | ⏳ Pendiente | `/voluntariado/` | Ruta #11 — Hub Pilar 4 /voluntariado/ (Red de Voluntariado Corporativo y Comunitario) |
| [`TKT-015`](./TKT-015.md) | ⏳ Pendiente | `/todos-a-leer/` | Ruta #12 — Subprograma /todos-a-leer/ + Construcción de Plantilla Maestra ProgramaModularTemplate.tsx (con Toggles) |
| [`TKT-016`](./TKT-016.md) | ⏳ Pendiente | `/jugando-ludoteca/` | Ruta #13 — Subprograma /jugando-ludoteca/ (Descubre Jugando Ludoteca) |
| [`TKT-017`](./TKT-017.md) | ⏳ Pendiente | `/becas/` | Ruta #14 — Subprograma /becas/ (Programa de Becas Eleva) |
| [`TKT-018`](./TKT-018.md) | ⏳ Pendiente | `/mejoremos-la-escuela/` | Ruta #15 — Subprograma /mejoremos-la-escuela/ (Rehabilitación e Infraestructura Escolar) |
| [`TKT-019`](./TKT-019.md) | ⏳ Pendiente | `/ludomovil/` | Ruta #16 — Subprograma /ludomovil/ (Unidad Móvil Educativa Itinerante) |
| [`TKT-020`](./TKT-020.md) | ⏳ Pendiente | `/otros-proyectos-educativos/` | Ruta #17 — Subprograma /otros-proyectos-educativos/ (Proyectos STEAM y Fortalecimiento Docente) |
| [`TKT-021`](./TKT-021.md) | ⏳ Pendiente | `/adopta-un-parque/` | Ruta #18 — Subprograma /adopta-un-parque/ (Rescate de Áreas Verdes y Espacios Públicos) |
| [`TKT-022`](./TKT-022.md) | ⏳ Pendiente | `/seguridad-vial/` | Ruta #19 — Subprograma /seguridad-vial/ (Entornos Escolares y Peatonales Seguros) |
| [`TKT-023`](./TKT-023.md) | ⏳ Pendiente | `/medioambiente/` | Ruta #20 — Subprograma /medioambiente/ (Sustentabilidad, Reciclaje y Cuidado del Agua) |
| [`TKT-024`](./TKT-024.md) | ⏳ Pendiente | `/emergencias/` | Ruta #21 — Subprograma /emergencias/ (Protocolo y Fondo de Auxilio ante Desastres) |
| [`TKT-025`](./TKT-025.md) | ⏳ Pendiente | `/participacion-comunitaria/` | Ruta #22 — Subprograma /participacion-comunitaria/ (Comités Vecinales y Autogestión) |
| [`TKT-026`](./TKT-026.md) | ⏳ Pendiente | `/voluntariado-a-limpiar-el-mundo/` | Ruta #23 — Subprograma /voluntariado-a-limpiar-el-mundo/ (Saneamiento Ambiental de Diques y Arroyos) |
| [`TKT-027`](./TKT-027.md) | ⏳ Pendiente | `/voluntariado-plantemos-hoy/` | Ruta #24 — Subprograma /voluntariado-plantemos-hoy/ (Campañas Masivas de Reforestación Urbana) |
| [`TKT-028`](./TKT-028.md) | ⏳ Pendiente | `/voluntariado-dia-de-la-accion/` | Ruta #25 — Subprograma /voluntariado-dia-de-la-accion/ (Mega Jornada Anual de Servicios y Talleres) |
| [`TKT-029`](./TKT-029.md) | ⏳ Pendiente | `/voluntariado-somos-comunidad/` | Ruta #26 — Subprograma /voluntariado-somos-comunidad/ (Intervenciones Comunitarias Integrales) |
| [`TKT-030`](./TKT-030.md) | ⏳ Pendiente | `/voluntariado-colecta-korima/` | Ruta #27 — Subprograma /voluntariado-colecta-korima/ (Colecta Invernal Kórima) |
| [`TKT-031`](./TKT-031.md) | ⏳ Pendiente | `/contacto-empresas/` | Ruta #28 — Landing Corporativa B2B /contacto-empresas/ (Alianzas Empresariales y RSE) |
| [`TKT-032`](./TKT-032.md) | ⏳ Pendiente | `/unete/` | Ruta #29 — Vista de Conversión /unete/ (Hub ¿Cómo Puedes Ayudar? para Personas y Empresas) |
| [`TKT-033`](./TKT-033.md) | ⏳ Pendiente | `/donacion/` | Ruta #30 — Vista de Conversión /donacion/ (Pasarela Givecloud, Datos Bancarios BBVA y CFDI SAT) |
| [`TKT-034`](./TKT-034.md) | ⏳ Pendiente | `/contacto/` | Ruta #31 — Vista /contacto/ (Formulario General, Oficinas en Chihuahua y Cd. Juárez) |
| [`TKT-035`](./TKT-035.md) | ⏳ Pendiente | `/preguntas-frecuentes/` | Ruta #32 — Vista /preguntas-frecuentes/ (Acordeón Categorizado de Dudas sobre Donativos, CFDI y Voluntariado) |
| [`TKT-036`](./TKT-036.md) | ⏳ Pendiente | `/aviso-de-privacidad/` | Ruta #33 — Vista Legal /aviso-de-privacidad/ (Aviso de Privacidad Integral LFPDPPP) |
| [`TKT-037`](./TKT-037.md) | ⏳ Pendiente | `/terminos-y-condiciones/` | Ruta #34 — Vista Legal /terminos-y-condiciones/ (Términos de Uso y Condiciones de Donativos) |
| [`TKT-038`](./TKT-038.md) | ⏳ Pendiente | `/torneo-de-golf/` | Ruta #35 — Evento Especial /torneo-de-golf/ (Landing del 7° Torneo de Golf United Way Chihuahua) |
| [`TKT-039`](./TKT-039.md) | ⏳ Pendiente | `/lista-golf-2026/` | Ruta #36 — Evento Especial /lista-golf-2026/ (Tabla Interactiva de Jugadores y Equipos Inscritos) |
| [`TKT-040`](./TKT-040.md) | ⏳ Pendiente | `/colombia-nos-une/` | Ruta #37 — Emergencia /colombia-nos-une/ + Construcción de Plantilla Maestra CampanaEmergenciaTemplate.tsx (Givecloud Embed) |
| [`TKT-041`](./TKT-041.md) | ⏳ Pendiente | `/unidos-por-venezuela/` | Ruta #38 — Emergencia /unidos-por-venezuela/ (Campaña Humanitaria sobre Plantilla Maestra Givecloud) |

---

### Fase 3: Adecuaciones de Identidad de Marca y Auditoría UX/UI 2026 (TKT-042 al TKT-051)
*Basadas en la Auditoría Profunda contra el Manual Oficial de Marca ([`docs/arquitectura/08-auditoria-identidad-marca-uwch.md`](../arquitectura/08-auditoria-identidad-marca-uwch.md))*

| Folio Ticket | Estatus | Ámbito de Aplicación | Título Oficial y Alcance Técnico |
| :---: | :---: | :--- | :--- |
| [`TKT-042`](./TKT-042.md) | ⏳ Pendiente | `Header`, `Footer`, `Modal`, `Favicon` | UI/BRAND: Sustitución de Logotipo Placeholder por Lockups Oficiales Saul Bass 2024 (Circle of Hope y 35 Aniversario) en Header, Footer, Modal y Favicon |
| [`TKT-043`](./TKT-043.md) | ⏳ Pendiente | `index.css`, `@theme`, Componentes | UI/BRAND: Implementación de la Matriz Cromática Oficial de 20 Muestras Pantone (--color-uwch-*) en Tailwind CSS v4 (@theme) y Variables Globales |
| [`TKT-044`](./TKT-044.md) | ⏳ Pendiente | Accesibilidad Global (WCAG 2.1) | A11Y/BRAND: Corrección de 12 Violaciones Críticas WCAG 2.1 (Texto Blanco #FFFFFF sobre Fondo Dorado #FFBA00 y Texto Dorado sobre Blanco) |
| [`TKT-045`](./TKT-045.md) | ⏳ Pendiente | CTAs de Conversión Primaria | UI/BRAND: Estandarización del Botón Oficial "Únete / Voluntariado" en Dorado (#FFBA00 + Texto #221E1F) vs. Botón "Donar Ahora" en Rojo (#FD372C) |
| [`TKT-046`](./TKT-046.md) | ⏳ Pendiente | Tipografía Global (28 vistas) | UI/BRAND: Blindaje Tipográfico Saul Bass — Regla Estricta ALL-CAPS en Antonio Bold (28 Instancias) y Jerarquía Palanquin en Subtítulos y Cuerpo |
| [`TKT-047`](./TKT-047.md) | ⏳ Pendiente | Portada y `/contacto-empresas/` | UI/BRAND: Implementación del Componente Normado de Co-Branding Corporativo (Paridad de Altura, Línea Divisoria #CCCCCC y Margen U) |
| [`TKT-048`](./TKT-048.md) | ⏳ Pendiente | `ImpactSelector`, Fondos y Plantillas | UI/BRAND: Geometría Derivada del Logotipo (El Arco, La Flecha y El Círculo Limpio) y Eliminación de Dianas Concéntricas (Bullseyes) y Efectos Blur |
| [`TKT-049`](./TKT-049.md) | ⏳ Pendiente | Acervo Fotográfico y Multimedia | UI/BRAND: Sustitución de las 64 Fotografías de Stock de Unsplash por Acervo Fotográfico Auténtico de Chihuahua y Anclaje Facial 100% (object-[center_25%]) |
| [`TKT-050`](./TKT-050.md) | ⏳ Pendiente | Enrutador Principal (`App.tsx`) | FEAT/ROUTING: Registro de los 16 Slugs Canónicos Oficiales de Programas de uwchihuahua.org (TKT-015..TKT-030) que actualmente devuelven 404 en Vivo |
| [`TKT-051`](./TKT-051.md) | ⏳ Pendiente | `index.html`, `robots.txt`, Redes | SEO/BRAND: Inyección de Bloqueo noindex/nofollow en <head> de Pruebas + Contactos Oficiales de Marca y 6 Redes Sociales (@unitedwaychihuahua) |
