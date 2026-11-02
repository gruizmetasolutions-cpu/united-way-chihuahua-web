# Ticket: [TKT-XXX] [Título descriptivo del cambio]

**Project Name**: `United Way Chihuahua Web (DEV-UWCHIHUAHUA)`  
**Entorno Destino**: `dev-uwchihuahua.dataholics.com.mx` (Nodo #5)  
**Guía de Integridad UX/UI Obligatoria**: [`docs/arquitectura/07-guia-integridad-ux-ui-resolve.md`](../arquitectura/07-guia-integridad-ux-ui-resolve.md)  
**Autor / Rama**: [Nombre de rama o feature]  
**Módulos Afectados**: [Módulos o dominio de negocio impactado]  
**Tipo de Cambio**: [Feature UI | Fix | Refactor | Modificación Backend | Migración BD | Arquitectura]  

---

### 0. CONTRATO DE INTEGRIDAD UX/UI Y SISTEMA DE DISEÑO (OBLIGATORIO)
- **Shell Persistente**: Conservar intactos `<Header onOpenDonate={...} />`, `<Footer />` y `<GivecloudModal />`, iniciando la vista con `pt-[88px] lg:pt-[110px]`.
- **Tokens Oficiales (`frontend/src/index.css`)**: Usar estrictamente `brand-navy` (`#21296B`), `brand-royal` (`#0044B5`), `brand-mid` (`#5082F0`), `brand-sky` (`#A7D2FF`), `brand-cream` (`#EDE8DA`), `brand-red` (`#FD372C`) y los colores de pilar (`pillar-yellow` `#FFBA00`, `pillar-orange` `#F47925`, `pillar-green` `#009464`, `pillar-purple` `#6C76D3`).
- **Tipografías**: `font-display` (`Antonio` Bold uppercase) para `H1/H2/H3` y cifras de KPIs; `font-heading` (`Nunito Sans` extrabold uppercase `tracking-[2px]`) para eyebrows, navegación y botones `rounded-full`; `font-body` (`Palanquin`) para cuerpo editorial.
- **Fotografía y Contraste**: Máscara institucional sólida/degradada (`from-brand-navy via-brand-navy/85`) para garantizar contraste WCAG AAA y `object-cover object-[center_25%]` para no cortar rostros.
- **No-Indexación en Pruebas**: Mantener intacto `<meta name="robots" content="noindex, nofollow" />` en `frontend/index.html`.

---

### 1. ALERTA DE IMPACTO EN BASE DE DATOS (CRÍTICO)
- [ ] **¿Modifica esquemas existentes?**: SÍ / NO
- [ ] **¿Altera Llaves Primarias (PKs) o Auto-incrementables?**: SÍ / NO (⚠️ ALERTA ROJA SI ES SÍ)
- [ ] **¿Modifica Llaves Foráneas (FKs) o restricciones de integridad?**: SÍ / NO
- [ ] **¿Requiere nueva migración en backend?**: SÍ / NO (Ruta del archivo de migración)
- [ ] **Detalle de cambios DDL**: (Columnas nuevas, tipos de datos, índices)

### 2. IMPACTO EN BACKEND (API)
- **Endpoints Nuevos / Modificados**: (Verbo HTTP + URI)
- **Políticas de Autenticación / RBAC**:
- **Compatibilidad con Contratos de API**:

### 3. IMPACTO EN FRONTEND
- **Ruta Exacta a Construir**:
- **Componentes y Vistas Afectadas**:
- **Consumo de API centralizada / Datos tipados**:
- **Manejo de Estado / Caché**:

### 4. CHECKLIST PREVIO A COMMIT
- [ ] Nodo #5 verificado: `United Way Chihuahua Web (DEV-UWCHIHUAHUA)`.
- [ ] Coherencia 100% validada contra `docs/arquitectura/07-guia-integridad-ux-ui-resolve.md`.
- [ ] Código verificado en local con compuerta de calidad (`.\verificar.ps1` o `./verificar.sh`).
- [ ] Cero llamadas residuales o URLs duras a servidores externos o IPs locales.
- [ ] Sin romper tipado TypeScript (`npx tsc --noEmit`) ni linter (`oxlint`).
