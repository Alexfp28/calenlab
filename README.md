# CalenLab 📅

> Tu calendario laboral inteligente para turnos rotativos

**CalenLab** es una aplicación web progresiva (PWA) diseñada específicamente para trabajadores con turnos rotativos. Combina un calendario laboral visual, diario personal y asistente de turnos en una única herramienta que funciona completamente offline, directamente desde tu móvil.

---

## 🎯 Objetivos

- **Simplificar la gestión de turnos rotativos** para trabajadores de sectores con horarios complejos (sanidad, industria, servicios, etc.)
- **Ofrecer una herramienta 100% funcional sin conexión** que no dependa de servidores externos
- **Proporcionar un asistente inteligente** que ayude a planificar descanso, vacaciones y actividades según el turno
- **Ser accesible y ligera**, pensada para dispositivos móviles con recursos limitados
- **Respetar la privacidad del usuario**: todos los datos permanecen en tu dispositivo

---

## ✨ Características principales

### 📆 Gestión de turnos
- Configuración flexible de jornada laboral y turnos base (mañana, tarde, noche)
- Rotación automática de turnos según patrón personalizado
- Colores visuales diferenciados por tipo de turno
- Visualización clara en calendario mensual/semanal

### 🏖️ Planificación de tiempo libre
- Gestión de vacaciones y días libres
- Integración de festivos nacionales, autonómicos y locales
- Cálculo automático de días disponibles

### 📝 Diario personal
- Entrada de notas por día
- Registro de actividades, estados de ánimo o eventos
- Entrada por voz usando Web Speech API

### 🔔 Recordatorios y asistencia
- Notificaciones personalizadas según turno
- Consejos de descanso y bienestar adaptados al horario
- Alertas para eventos importantes

### 🚀 PWA: Como una app nativa
- Instalable en pantalla de inicio
- Funciona completamente offline
- Interfaz optimizada para móvil
- Carga rápida y bajo consumo de recursos

---

## 🛠️ Stack tecnológico

### Frontend
- **Vue 3** - Framework progresivo para interfaces de usuario
- **Vite** - Build tool rápido y moderno
- **JavaScript** - Lenguaje principal del MVP
- **Pinia** - Store de estado oficial para Vue
- **TailwindCSS 4** - Framework de estilos utility-first

### Persistencia local
- **IndexedDB** - Base de datos del navegador
- **Dexie.js** - Wrapper moderno para IndexedDB con API simplificada

### Funcionalidades clave
- **FullCalendar** - Librería de calendario interactivo para Vue
- **vite-plugin-pwa** - Plugin para convertir la app en PWA
- **Web Notifications API** - Notificaciones nativas del navegador
- **Web Speech API** - Reconocimiento de voz para entrada por voz

### Futuros (post-MVP)
- **Supabase / Firebase** - Sincronización opcional en la nube
- **Tauri** - Versión desktop multiplataforma

---

## 🏗️ Arquitectura del MVP

### Principios arquitectónicos

**Local-first & Offline-first**  
Todos los datos se almacenan localmente en IndexedDB. La aplicación funciona sin conexión desde el primer momento.

**Sin backend (MVP)**  
No hay servidor, API REST ni base de datos remota en la versión inicial. Esto reduce complejidad, costes y mejora la privacidad.

**Mobile-first**  
La interfaz está diseñada primero para móviles, pero es responsive y funcional en tablets y escritorio.

**Progressive Web App**  
Service Worker para caché de recursos y funcionamiento offline. Manifest para instalación en dispositivo.

### Capas de la aplicación

```
┌─────────────────────────────────────┐
│         UI Components (Vue)         │
│  Calendario | Diario | Configuración│
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│        Store (Pinia)                │
│  State management & Business Logic  │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│      Servicios / Utilidades         │
│  Cálculos, Notificaciones, Voz      │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│      Capa de datos (Dexie)          │
│         IndexedDB                   │
└─────────────────────────────────────┘
```


---

## 📁 Estructura del proyecto

```
calenlab/
├── public/              # Recursos estáticos (manifest, iconos PWA)
├── src/
│   ├── assets/          # Estilos globales y recursos
│   ├── components/      # Componentes Vue reutilizables
│   ├── pages/           # Vistas principales de la app
│   ├── router/          # Configuración de Vue Router
│   ├── stores/          # Stores de Pinia (turnos, diario, config)
│   ├── db/              # Configuración de Dexie (esquemas, tablas)
│   ├── services/        # Lógica de negocio (notificaciones, cálculos)
│   ├── utils/           # Funciones auxiliares
│   ├── App.vue          # Componente raíz
│   └── main.js          # Punto de entrada
├── index.html
├── vite.config.js       # Configuración de Vite + PWA
├── package.json
└── README.md
```


---

## 🚀 Instalación y ejecución

### Requisitos previos
- **Node.js** 18+ y **npm** (o pnpm/yarn)
- Navegador moderno compatible con PWA (Chrome, Edge, Firefox, Safari)

### Instalación

```shell script
# Clonar el repositorio
git clone https://github.com/tu-usuario/calenlab.git
cd calenlab

# Instalar dependencias
npm install
```


### Desarrollo

```shell script
# Ejecutar servidor de desarrollo con hot-reload
npm run dev
```


La aplicación estará disponible en `http://localhost:5173`

### Producción

```shell script
# Compilar para producción
npm run build

# Vista previa del build de producción
npm run preview
```


Los archivos optimizados se generarán en la carpeta `dist/`

---

## 📱 Uso básico

### Primera configuración

1. **Configura tu jornada laboral**  
   Define tu horario base, tipo de turnos y patrón de rotación

2. **Añade festivos**  
   Marca los días festivos de tu localidad y comunidad

3. **Planifica vacaciones**  
   Indica tus periodos de vacaciones y días libres

### Uso diario

- **Visualiza tu calendario** con los turnos del mes
- **Añade notas en el diario** para cada día (texto o voz)
- **Recibe consejos** adaptados a tu turno actual
- **Configura recordatorios** para eventos importantes

### Instalar como app

En navegadores compatibles, verás un botón de "Instalar" o un aviso en la barra de direcciones. Una vez instalada, CalenLab funcionará como una app nativa en tu dispositivo.

---

## 🗺️ Roadmap

### ✅ Fase 1: MVP (Actual)
- Configuración de turnos y rotaciones
- Calendario visual con FullCalendar
- Diario con entrada de texto
- Persistencia local con IndexedDB
- PWA básica offline-first

### 🔄 Fase 2: Mejoras
- Entrada por voz con Web Speech API
- Sistema de notificaciones inteligentes
- Consejos personalizados según turno
- Estadísticas de turnos trabajados
- Exportación de datos (JSON, CSV)

### 🌐 Fase 3: Sincronización (Opcional)
- Backend con Supabase/Firebase
- Autenticación opcional
- Sincronización multi-dispositivo
- Copia de seguridad en la nube

### 🖥️ Fase 4: Desktop
- Versión de escritorio con Tauri
- Sincronización local móvil-desktop
- Funcionalidades avanzadas de gestión

---

## 💡 Filosofía del proyecto

**Para personas reales**  
CalenLab nace de una necesidad real: ayudar a familiares y amigos que trabajan en turnos rotativos a organizar su vida laboral y personal.

**Privacidad primero**  
Tus datos son tuyos. No se envían a ningún servidor, no se rastrean, no se venden. Todo permanece en tu dispositivo.

**Simplicidad y funcionalidad**  
Antes de añadir funciones complejas, nos aseguramos de que lo básico funcione perfectamente.

**Accesible para todos**  
Diseñada para funcionar en dispositivos modestos, sin requerir conexión permanente ni recursos elevados.

**Código abierto y transparente**  
El proyecto es open source. Cualquiera puede ver cómo funciona, contribuir o adaptarlo a sus necesidades.

---

## 🤝 Contribuciones

Este proyecto está en sus primeras fases. Las contribuciones, sugerencias y reportes de bugs son bienvenidos.

Si quieres colaborar:
1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Haz commit de tus cambios (`git commit -m 'Añade nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

## 👨‍💻 Autor

Desarrollado con ❤️ para trabajadores de turnos rotativos

---

**CalenLab** - _Tu turno, tu tiempo, tu control_