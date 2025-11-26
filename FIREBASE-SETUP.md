# 🔥 Configuración de Firebase para Atlas

## 🚀 Inicio Rápido

### Opción 1: Modo Demo (Recomendado para empezar)
La aplicación ya funciona perfectamente en modo demo con datos de ejemplo. ¡Solo abre `index.html` en tu navegador!

### Opción 2: Configurar Firebase Real
Sigue estos pasos para conectar Atlas con tu propio proyecto Firebase:

## 📋 Pasos para Configurar Firebase

### 1. Crear Proyecto en Firebase Console
1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Haz clic en "Crear un proyecto"
3. Ingresa el nombre: `atlas-app` (o el que prefieras)
4. Activa Google Analytics (opcional)
5. Haz clic en "Crear proyecto"

### 2. Configurar Servicios de Firebase

#### A. Authentication
1. En el menú lateral, ve a **Authentication**
2. Haz clic en "Comenzar"
3. Ve a la pestaña **Users** para ver los usuarios
4. (Opcional) Configura proveedores de autenticación en la pestaña **Sign-in method**

#### B. Realtime Database
1. Ve a **Realtime Database**
2. Haz clic en "Crear base de datos"
3. Selecciona la ubicación (Europe-west recomendado para Europa)
4. Empieza en modo de prueba por ahora
5. Haz clic en "Habilitar"

#### C. Storage
1. Ve a **Storage**
2. Haz clic en "Comenzar"
3. Selecciona la misma ubicación que la base de datos
4. Empieza en modo de prueba
5. Haz clic en "Habilitar"

### 3. Obtener Configuración del Proyecto

1. En el menú lateral, ve a **Configuración del proyecto** (icono de engranaje)
2. Scroll hacia abajo hasta "Tus aplicaciones"
3. Haz clic en **Web** `</>`
4. Registra tu app con el nombre: `atlas-web`
5. **NO** marques "Hosting de Firebase" (usaremos GitHub Pages)
6. Haz clic en "Registrar aplicación"

### 4. Copiar Configuración

Firebase te mostrará algo como esto:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC1234567890abcdef1234567890ab",
  authDomain: "atlas-app.firebaseapp.com",
  databaseURL: "https://atlas-app-default-rtdb.firebaseio.com",
  projectId: "atlas-app",
  storageBucket: "atlas-app.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456789012"
};
```

### 5. Actualizar Configuración en Atlas

1. Abre el archivo `scripts/config.js`
2. Busca la línea 9-18 donde dice:
```javascript
firebase: {
    apiKey: "your-api-key",
    authDomain: "your-project-id.firebaseapp.com",
    // ...
}
```

3. Reemplaza con tu configuración real:

```javascript
firebase: {
    apiKey: "AIzaSyC1234567890abcdef1234567890ab",
    authDomain: "atlas-app.firebaseapp.com",
    databaseURL: "https://atlas-app-default-rtdb.firebaseio.com",
    projectId: "atlas-app",
    storageBucket: "atlas-app.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef123456789012"
}
```

### 6. Probar la Configuración

1. Recarga la aplicación en tu navegador
2. El banner azul cambiará a verde: "✅ Atlas conectado a Firebase"
3. Los datos se guardarán en tu proyecto Firebase

## 🔒 Configurar Reglas de Seguridad

### Realtime Database Rules
En Firebase Console > Realtime Database > Rules, usa esto:

```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "auth != null && auth.uid === $uid",
        ".write": "auth != null && auth.uid === $uid"
      }
    }
  }
}
```

### Storage Rules
En Firebase Console > Storage > Rules, usa esto:

```json
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /users/{uid}/{allPaths=**} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

## 🎉 ¡Listo!

Tu aplicación Atlas ahora estará completamente funcional con:
- ✅ Autenticación de usuarios
- ✅ Guardado de viajes y datos
- ✅ Subida de fotos
- ✅ Sincronización en tiempo real

## 📱 Compartir tu Aplicación

### Usando GitHub Pages
1. Sube tu código a GitHub
2. Ve a Settings > Pages
3. Selecciona "Deploy from a branch" > main
4. Tu app estará disponible en: `https://tu-usuario.github.io/atlas-app`

### Firebase Hosting (Alternativa)
Si prefieres usar Firebase Hosting:
1. Instala Firebase CLI: `npm install -g firebase-tools`
2. Inicia sesión: `firebase login`
3. Inicializa: `firebase init hosting`
4. Despliega: `firebase deploy`

## 🆘 Solución de Problemas

### Error: "Firebase not configured"
- Verifica que hayas actualizado `scripts/config.js` con tu configuración real
- Asegúrate de que el `projectId` no sea `"your-project-id"`

### Error de permisos
- Revisa las reglas de seguridad en Firebase Console
- Asegúrate de que el usuario esté autenticado

### Error de carga de datos
- Verifica que tu proyecto Firebase esté activo
- Revisa la consola del navegador para errores específicos

## 📞 ¿Necesitas Ayuda?

Si tienes algún problema:
1. Revisa la consola del navegador (F12)
2. Verifica que todos los servicios de Firebase estén habilitados
3. Confirma que la configuración en `config.js` sea correcta

¡Disfruta de tu aplicación Atlas! ✈️