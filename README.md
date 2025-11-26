# 🌍 Atlas - Tu Compañero de Viajes Personal

Una aplicación web completa para gestionar tus viajes, crear rutas personalizadas, documentar experiencias y gamificar tus aventuras de viaje.

![Atlas Travel App](https://via.placeholder.com/800x400?text=Atlas+Travel+App)

## ✨ Características Principales

### 📍 Gestor de Rutas y Ciudades
- Crear rutas personalizadas con múltiples destinos
- Gestión de fechas, presupuesto y estado del viaje
- Subida y organización de fotos por ubicación
- Vista de progreso y timeline del viaje

### 📖 Diario de Viajes con Historia
- Crear entradas detalladas con fotos y experiencias
- Timeline visual de aventuras
- Integración multimedia (fotos, audio, notas)
- Estados de ánimo y condiciones climáticas

### 🎯 Companion de Planificación
- Sugerencias automáticas de lugares por visitar
- Planificación de presupuesto con tracking
- Categorización de actividades (atracciones, restaurantes, etc.)

### 🏆 Gamificación
- Sistema de badges y logros
- Puntos por actividades completadas
- Estadísticas de viajes (países, ciudades, fotos)
- Motivación para explorar más destinos

## 🚀 Inicio Rápido

### Opción 1: ¡Empezar Ahora! (Recomendado)
1. **Descarga** o clona este repositorio
2. **Abre** el archivo `index.html` en tu navegador
3. **¡Listo!** La aplicación funciona inmediatamente en modo demo

✨ **La aplicación ya incluye datos de ejemplo para que explores todas las funciones**

### Opción 2: Configurar con Firebase
Si quieres guardar tus propios datos:

1. Lee la guía detallada: [`FIREBASE-SETUP.md`](./FIREBASE-SETUP.md)
2. Configura tu proyecto Firebase
3. Actualiza la configuración en `scripts/config.js`
4. ¡Disfruta de la aplicación con datos reales!

## 📁 Estructura del Proyecto

```
atlas-travel-app/
├── index.html              # Página principal
├── README.md               # Este archivo
├── FIREBASE-SETUP.md       # Guía de configuración Firebase
│
├── styles/                 # Estilos CSS
│   ├── main.css           # Estilos globales
│   └── components.css     # Componentes específicos
│
├── scripts/               # JavaScript modules
│   ├── config.js         # Configuración de la app
│   ├── demo-config.js    # Configuración demo
│   ├── firebase.js       # Firebase integration
│   ├── firebase-mock.js  # Datos demo
│   ├── app.js           # Aplicación principal
│   ├── routes.js        # Gestor de rutas
│   ├── diary.js         # Diario de viajes
│   ├── planner.js       # Planificador
│   └── profile.js       # Perfil de usuario
│
└── imgs/                 # Imágenes
    └── airplane_favicon_4.jpg # Favicon
```

## 🛠️ Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS + CSS personalizado
- **Backend**: Firebase (Auth, Realtime Database, Storage)
- **UI/UX**: Diseño responsive mobile-first
- **Iconos**: SVG inline para mejor rendimiento

## 📱 Funcionalidades Destacadas

### 🗺️ Gestión de Viajes
- **Rutas Múltiples**: Crea viajes con múltiples ciudades
- **Estados de Viaje**: Planificado, en progreso, completado
- **Presupuesto Inteligente**: Planificación y seguimiento de gastos
- **Fotografías**: Organiza fotos por destino

### 📝 Diario de Experiencias
- **Timeline Visual**: Historial cronológico de aventuras
- **Multimedia**: Integra fotos, texto y metadata
- **Estados de Ánimo**: Registra cómo te sentiste
- **Clima**: Asocia condiciones climáticas con tus experiencias

### 📊 Dashboard Inteligente
- **Estadísticas Personales**: Viajes, países, ciudades, fotos
- **Logros y Badges**: Sistema de gamificación motivacional
- **Actividad Reciente**: Seguimiento de todas tus acciones
- **Sugerencias Personalizadas**: Recomendaciones basadas en tus gustos

## 🎮 Modo Demo vs Firebase

| Característica | Modo Demo | Firebase Real |
|---|---|---|
| Datos de ejemplo | ✅ Incluidos | ❌ Vacíos inicialmente |
| Guardar información | ❌ No se guarda | ✅ Sincronización en tiempo real |
| Autenticación | ✅ Demo automático | 🔐 Login real |
| Fotos | ✅ Placeholders | 📸 Subida real |
| Configuración | 0 configuración | Requiere setup |

## 🛠️ Desarrollo Local

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/atlas-viajes.git
cd atlas-viajes

# Abrir en navegador (desde la carpeta del proyecto)
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

## 🚀 Deployment

### GitHub Pages (Recomendado)
1. Sube tu código a GitHub
2. Ve a Settings > Pages
3. Selecciona "Deploy from a branch" > main
4. Tu app estará disponible en: `https://tu-usuario.github.io/repositorio`

### Firebase Hosting
```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Login y deploy
firebase login
firebase init hosting
firebase deploy
```

## 🔧 Configuración Avanzada

### Alternar Modo Demo/Real
Edita `scripts/demo-config.js`:
```javascript
export const DemoConfig = {
    useDemoMode: false, // Cambia a false para Firebase real
    // ...
};
```

### Personalización
- **Colores**: Modifica variables CSS en `styles/main.css`
- **Funcionalidades**: Extiende módulos en `scripts/`
- **Datos**: Personaliza ejemplos en `scripts/demo-config.js`

## 🆘 Solución de Problemas

### La aplicación no carga
- Verifica que todas las carpetas estén presentes
- Abre `index.html` directamente en el navegador
- Revisa la consola del navegador (F12)

### No se guardan los datos
- La aplicación está en modo demo (datos no se guardan)
- Para guardar datos, configura Firebase
- Lee: [`FIREBASE-SETUP.md`](./FIREBASE-SETUP.md)

### Errores de consola
- Abre las Developer Tools (F12)
- Revisa la pestaña Console para errores específicos
- Asegúrate de que la aplicación tenga permisos de internet

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📞 Soporte

Si tienes alguna pregunta o necesitas ayuda:

- **Issues**: Abre un issue en GitHub
- **Documentación**: Lee `FIREBASE-SETUP.md` para configuración Firebase
- **Demo**: ¡Explora la aplicación directamente!

## 🗺️ Roadmap

- [ ] Integración con APIs de clima reales
- [ ] Modo offline con Service Workers
- [ ] Exportación de datos (PDF, JSON)
- [ ] Compartición de viajes con amigos
- [ ] Notificaciones push
- [ ] Integración con mapas (Google Maps, Mapbox)

## 🏆 Créditos

Desarrollado por **MiniMax Agent** como demostración de capacidades de desarrollo web completo.

---

## 🎉 ¡Disfruta Viajando con Atlas!

**¡Explora el mundo, documenta tus aventuras y alcanza todos tus logros de viajero!** ✈️🌍📸

---

## 🚀 Despliegue a Firebase Hosting

### Requisitos Previos
- Cuenta de GitHub ✅
- Cuenta de Firebase ✅ (Proyecto: `atlas-app-fd6fe`)
- Firestore y Realtime Database configurados ✅

### Configuración Firebase Actual
- **Proyecto Firebase**: atlas-app-fd6fe
- **URL de la App**: Se generará tras el despliegue
- **Base de Datos**: Firestore + Realtime Database ✅
- **Storage**: Configurado para imágenes y archivos ✅

### Pasos de Despliegue Automático

#### 1️⃣ Crear Repositorio en GitHub
1. Ve a [GitHub.com](https://github.com) e inicia sesión
2. Click en **"+"** → **"New repository"**
3. Nombre: `atlas-travel-app`
4. Descripción: `"Aplicación web para gestión de viajes con Firebase"`
5. Selecciona **"Public"** o **"Private"**
6. Click **"Create repository"**

#### 2️⃣ Subir Archivos (2 minutos)

**Método Rápido - Drag & Drop:**
1. Ve a tu repositorio nuevo en GitHub
2. Click **"uploading an existing file"**
3. Arrastra **TODOS** los archivos del proyecto (index.html, firebase.json, .firebaserc, etc.)
4. Mensaje: `"Initial commit: Atlas travel app with Firebase"`
5. Click **"Commit changes"**

#### 3️⃣ Conectar con Firebase Hosting (3 minutos)
1. Ve a [Firebase Console](https://console.firebase.google.com)
2. Selecciona proyecto: `atlas-app-fd6fe`
3. En menú lateral → **"Hosting"**
4. Click **"Get started"** → **"GitHub"**
5. Autoriza GitHub → Selecciona tu repositorio `atlas-travel-app`
6. Build settings:
   - **Directory to publish**: `.` (punto)
   - **Build command**: `echo "Static site"`
   - **Publish directory**: `./`
7. Click **"Finish integration"**

#### 4️⃣ ¡Listo! Tu App estará online
- ⏱️ **Tiempo de despliegue**: 2-3 minutos
- 🌐 **URL de tu app**: `https://atlas-app-fd6fe.web.app`
- 🔄 **Auto-actualizaciones**: Cada push a GitHub actualizará la app automáticamente

### 🎯 Ventajas del Despliegue
- ✅ **Gratis**: GitHub + Firebase Hosting sin costo
- ✅ **Automático**: GitHub → GitHub Actions → Firebase → Live
- ✅ **SSL incluido**: HTTPS automático
- ✅ **CDN global**: Velocidad mundial
- ✅ **Dominio personalizado**: Opcional (~10€/año)

### 📱 URLs de Tu Aplicación
- **Principal**: `https://atlas-app-fd6fe.web.app`
- **Custom domain**: Configura tu propio dominio

### 🔄 Flujo de Actualizaciones
1. Haces cambios localmente
2. `git add .` → `git commit -m "Update"` → `git push`
3. GitHub Actions detecta cambios
4. Firebase redespliega automáticamente
5. Tu app actualizada está online

### 📊 Límites Gratuitos Firebase
- **Hosting**: 10GB almacenamiento + 10GB transferencia/mes
- **Firestore**: 50k lecturas/día, 20k escrituras/día
- **Realtime Database**: 1GB + 10GB transferencia/mes
- **Storage**: 5GB almacenamiento + 5GB transferencia/mes

### 🛠️ Comandos Útiles (Opcional)
```bash
# Deploy manual (no necesario con GitHub Actions)
firebase deploy --only hosting

# Servir localmente para testing
firebase serve

# Login Firebase (solo una vez)
firebase login
```

---

**🎉 ¡Tu aplicación Atlas estará online en menos de 10 minutos!** 

**Desarrollado por**: MiniMax Agent | **Fecha**: 25 de Noviembre, 2025