# Minuta Formal: Acuerdos, Dolores y Requerimientos de Sitio Web UWCH

**Fecha de la Sesión**: Reunión de levantamiento y alineación técnica  
**Participantes**:
- **Alonso** — Dataholics (Líder Técnico / Arquitectura)
- **Elliott Baldenebro** — Coordinador de Comunicación y Mercadotecnia, United Way Chihuahua  
**Documento Fuente**: Transcripción completa de 1h 05m (`Reunión_Sitio_Web_UWCH.docx`)  
**Estatus**: Validado y Aprobado para Plan de Ejecución (Opción B)

---

## 1. Contexto y Diagnóstico del Sitio Actual (`uwchihuahua.org`)

Durante la reunión, Elliott expuso las limitaciones críticas que enfrenta diariamente en la administración del sitio web actual desarrollado en WordPress por un proveedor anterior. Los dolores clave identificados son:

### 1.1. Portada (Home): Hero Estático y Saturación de Banners Apilados *(03:43 - 07:35, 13:30)*
- **Problema**: El proveedor anterior configuró un Hero rígido y estático con una sola fotografía fija.
- **Consecuencia**: Cuando surge un evento importante (*Torneo de Golf*) o una campaña humanitaria (*Colombia Nos Une*, *Unidos por Venezuela*), Elliott se vio forzado a crear y apilar banners horizontales masivos justo debajo del Hero.
- **Frase textual de Elliott (13:30)**: *"Esto ha sido como mi alternativa a los sliders... pero esto pues se quita. Me gustaría que el slider de arriba tuviera varias pestañas y que tú le pudieras picar dependiendo del evento que quieras mostrar"*.

### 1.2. Deformación y Recorte de Rostros en Fotografías *(05:26 - 07:19)*
- **Problema**: Al subir banners o fotos en el sitio actual, el texto institucional queda encima de los rostros de niños, voluntarios o beneficiarios, o las cabezas son cortadas debido a encuadres responsivos arbitrarios.
- **Requerimiento**: Una solución con **máscara gráfica institucional en el tercio izquierdo** y encuadre fotográfico inteligente a la derecha que garantice que las caras siempre se vean nítidas y centradas.

### 1.3. Navegación Rígida sin Sticky Header *(07:45 - 08:30)*
- **Problema**: Al navegar hacia abajo, el menú superior se pierde completamente. Elliott solicitó al proveedor anterior que la barra de navegación se mantuviera fija al hacer scroll (*"que las opciones bajaran"*), pero nunca fue implementado.
- **Requerimiento**: **Sticky Header permanente** que acompañe el recorrido del usuario, manteniendo accesible la donación y las secciones clave.

### 1.4. Enlaces Rotos (404) en la Portada en Vivo *(14:00 - 15:00)*
- **Hallazgo de Auditoría Técnica**: En la página principal actual existen 4 enlaces rotos hacia subpáginas críticas:
  - `¿CÓMO PUEDES AYUDAR?` apunta a `/como-puedes-ayudar/` (Error 404; debe apuntar a `/unete/`).
  - Tarjeta `Comunidades saludables` apunta a `/comunidad-saludable-2/` (Error 404; debe ser `/comunidad-saludable/`).
  - Tarjeta `Resiliencia comunitaria` apunta a `/resiliencia-comunitaria-2/` (Error 404; debe ser `/resiliencia-comunitaria/`).
  - Tarjeta `Voluntariado` apunta a `/voluntariado-2/` (Error 404; debe ser `/voluntariado/`).

### 1.5. Sección Empresarial (RSE) Débil *(08:53 - 12:30)*
- **Problema**: Las empresas aliadas y donantes institucionales son el motor principal de financiamiento de United Way Chihuahua, pero en el sitio actual solo existe una subsección mínima dentro de `/unete/` (*"esta partecita toda X"*).
- **Requerimiento**: Crear un área de alto impacto visual y comercial orientada a **Responsabilidad Social Empresarial (RSE)**: inversión social estratégica, voluntariado corporativo y campañas de donación en nómina.

### 1.6. Desigualdad Estructural en las 16 Subpáginas de Programas *(42:29 - 46:00)*
- **Problema**: Las 16 subpáginas de programas sociales (como *Robótica*, *Kórima*, *Crianza Positiva*, *Liderazgo Juvenil*, etc.) fueron maquetadas de forma arbitraria por el proveedor anterior: unas tienen galerías, otras cambian tipografías, otras omiten numeralia.
- **Requerimiento**: Crear una **Plantilla Maestra Modular de Programa**, consistente y estandarizada, donde cada sección sea un bloque que se pueda encender o apagar mediante *toggles*.

---

## 2. Acuerdos de Alcance y Definición Arquitectónica

### 2.1. Confirmación de Opción B (Cotización Aprobada) *(27:19, 54:57)*
Se ratificó avanzar con la **Opción B**:
1. **Frontend Desacoplado de Alto Rendimiento**: Código limpio, rápido, seguro y optimizado contra ataques o fallas de plugins de WordPress.
2. **Sistema de Plantillas Modulares Editables**: Estructura de componentes reutilizables donde Elliott pueda actualizar textos, cifras (KPIs) y fotos sin romper el diseño.
3. **Blog / Noticias Aislado**: El blog dinámico (`/noticias/`) se mantendrá en una instancia independiente de WordPress (en subdominio como `blog.uwchihuahua.org` o CMS liviano headless), sin comprometer la velocidad ni la seguridad del sitio institucional principal.
4. **Formularios con Enrutamiento a Correos Institucionales**: Conexión de formularios de contacto y voluntariado con protección anti-spam y entrega garantizada.

### 2.2. Clarificación sobre Sistemas Internos vs. Sitio Web Público *(11:15 - 11:42, 16:54 - 17:30)*
- **Portales de Voluntariado y Recibos Fiscales**: Se aclaró que los usuarios y empresas no inician sesión en la página web pública para emitir facturas o gestionar voluntarios; esos flujos corresponden a plataformas internas independientes (atendidas en proyectos paralelos con Jessica y Leiza).
- **Integración de Donaciones**: La donación en línea del sitio web se conecta de forma directa e incrustada con **Givecloud** (`https://unitedwaychihuahua.givecloud.co`).

---

## 3. Compromisos y Plan de Entrega para la Sesión del Jueves *(1:04:12)*

Para la sesión de revisión programada para el **jueves a las 11:00 AM**, se establecieron los siguientes compromisos:

### Compromisos de Dataholics (Alonso / Equipo de Desarrollo):
1. **Prototipo Visual y Maqueta Funcional del Sitio**:
   - Presentar el diseño clonado y modernizado de United Way Chihuahua.
   - Demostración del **Hero Rotor Dinámico** con selector de pestañas (Torneo de Golf, Visión 2027, etc.) y máscara gráfica protectora de fotos.
   - Demostración del **Sticky Header** con navegación reorganizada.
   - Demostración del **Grid de 4 Pilares de Impacto** ("con sal y pimienta").
   - Demostración de la **Plantilla Modular de Programa** (aplicada a programas muestra como *Robótica* o *Kórima*).
   - Demostración de la **Plantilla de Campaña de Emergencia** con contenedor Givecloud.
   - Demostración de la nueva sección **Empresas Aliadas / RSE**.

### Insumos Solicitados a United Way Chihuahua (Elliott):
1. **Directorio de Fotografías Institucionales**: Banco de imágenes en alta resolución, organizadas en carpetas por pilar de impacto y programas.
2. **Listado de Plantillas y Necesidades Específicas**: Confirmación de casos de uso extraordinarios para eventos o convocatorias.
3. **Palabras Clave de Posicionamiento (SEO)**: Términos prioritarios para posicionamiento en motores de búsqueda e indexación en motores de IA (LLMs).
