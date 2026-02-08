# 💌 Carta Interactiva de San Valentín

Una hermosa carta interactiva de San Valentín que puedes personalizar completamente. Simula un sobre que se abre para revelar tu mensaje romántico con animaciones suaves y corazones flotantes.

## 📖 Descripción

Este proyecto es una experiencia web interactiva donde puedes crear una carta de San Valentín personalizada. El usuario puede abrir el sobre haciendo clic en el botón "OPEN" para revelar tu mensaje romántico, con corazones flotantes y animaciones suaves.

## ✨ Características

- 🎨 **Animaciones suaves**: La carta se expande elegantemente al abrirse
- 📱 **Totalmente responsive**: Se ve perfecto en móviles, tablets y desktop
- 💝 **Corazones flotantes**: Animación de corazones rojos al abrir la carta
- 🎯 **Sin dependencias**: Solo HTML, CSS y JavaScript puro
- ✏️ **Fácil personalización**: Edita archivos de texto simples
- 💌 **Corazón CSS**: Corazón de seguro creado completamente con CSS

---

## 🚀 Guía Paso a Paso: Cómo Personalizar Tu Carta

### Paso 1: Hacer Fork del Repositorio

1. **Ve al repositorio en GitHub**: 
   - Navega a la página principal del repositorio
   - Haz clic en el botón **"Fork"** (esquina superior derecha)

2. **Configura tu Fork**:
   - Selecciona tu cuenta de GitHub
   - Opcionalmente, cambia el nombre del repositorio
   - Haz clic en **"Create fork"**

3. **¡Listo!** Ahora tienes tu propia copia del repositorio en tu cuenta de GitHub.

### Paso 2: Clonar el Repositorio en Tu Computadora

1. **Copia la URL de tu fork**:
   - En tu repositorio forkeado, haz clic en el botón verde **"Code"**
   - Copia la URL (HTTPS o SSH)

2. **Abre tu terminal** (Git Bash, Terminal, PowerShell, etc.)

3. **Navega a la carpeta donde quieres guardar el proyecto**:
   ```bash
   cd ruta/a/tu/carpeta
   ```

4. **Clona el repositorio**:
   ```bash
   git clone https://github.com/TU-USUARIO/san-valentin.git
   ```

5. **Entra a la carpeta del proyecto**:
   ```bash
   cd san-valentin
   ```

### Paso 3: Personalizar el Mensaje de la Carta

1. **Abre el archivo `mensaje.txt`** con cualquier editor de texto (Bloc de notas, VS Code, etc.)

2. **Escribe tu mensaje personalizado**. Puedes:
   - Usar múltiples párrafos separados por líneas en blanco
   - Agregar emojis si lo deseas (❤️, 💕, etc.)
   - Escribir todo lo que quieras expresar

3. **Formato del mensaje**:
   ```
   Mi Amor,

   Tu primer párrafo aquí.

   Tu segundo párrafo aquí.

   Tu tercer párrafo aquí.

   Con todo mi amor ❤️
   ```

4. **Guarda el archivo** (Ctrl+S o Cmd+S)

### Paso 4: Personalizar los Nombres (Remitente y Destinatario)

1. **Abre el archivo `nombres.txt`**

2. **Edita las líneas manteniendo el formato exacto**:
   ```
   De: Tu Nombre
   Para: Nombre del Destinatario
   ```

3. **Ejemplo**:
   ```
   De: María
   Para: Juan
   ```

4. **Guarda el archivo**

### Paso 5: Ver Tu Carta Personalizada

#### Opción 1: Abrir Directamente (Más Simple)

1. **Navega a la carpeta del proyecto** en tu explorador de archivos
2. **Haz doble clic en `index.html`**
3. Se abrirá en tu navegador predeterminado

#### Opción 2: Usar un Servidor Local (Recomendado)

**Si tienes Python instalado:**
```bash
# En la carpeta del proyecto, ejecuta:
python -m http.server 8000
```

Luego abre tu navegador y visita: `http://localhost:8000`

**Si tienes Node.js instalado:**
```bash
# Instala http-server globalmente (solo la primera vez):
npm install -g http-server

# Luego en la carpeta del proyecto:
http-server
```

**Si tienes PHP instalado:**
```bash
php -S localhost:8000
```

### Paso 6: Probar la Carta

1. **Abre la carta** en tu navegador
2. **Haz clic en el botón "OPEN"** para ver tu mensaje personalizado
3. **Verifica que**:
   - Tu mensaje se muestre correctamente
   - Los nombres "De:" y "Para:" sean los correctos
   - Las animaciones funcionen bien
   - Se vea bien en tu dispositivo

### Paso 7: Compartir Tu Carta (Opcional)

#### Opción A: Subir a GitHub Pages

1. **En tu repositorio de GitHub**, ve a **Settings**
2. **Scroll hasta "Pages"** en el menú lateral
3. **En "Source"**, selecciona la rama `main` o `master`
4. **Haz clic en "Save"**
5. **Tu carta estará disponible en**: `https://TU-USUARIO.github.io/san-valentin/`

#### Opción B: Usar Otros Servicios

- **Netlify**: Arrastra y suelta la carpeta del proyecto
- **Vercel**: Conecta tu repositorio de GitHub
- **GitHub Pages**: Como se explicó arriba

---

## 📁 Estructura del Proyecto

```
san-valentin/
├── index.html      # Estructura HTML de la carta
├── styles.css      # Estilos y animaciones
├── script.js       # Lógica de interacción
├── mensaje.txt     # ✏️ EDITA ESTE ARCHIVO para tu mensaje
├── nombres.txt     # ✏️ EDITA ESTE ARCHIVO para los nombres
└── README.md       # Este archivo
```

---

## 🎨 Personalización Avanzada (Opcional)

### Cambiar Colores

Si quieres cambiar los colores del sobre o la carta, edita `styles.css`:

- **Color del sobre**: Busca `#2c5f8d` y `#1a4a6b`
- **Color del corazón**: Busca `#e74c3c`
- **Color de fondo**: Busca `#a8d5e2` y `#b8e5f0`

### Cambiar Tamaños

En `styles.css` puedes ajustar:
- **Tamaño del sobre**: Busca `.envelope-wrapper`
- **Tamaño de la carta**: Busca `.letter.revealed`
- **Tamaño del corazón**: Busca `.lock-heart`

---

## ❓ Preguntas Frecuentes

### ¿Puedo usar emojis en el mensaje?
¡Sí! Puedes usar cualquier emoji en `mensaje.txt`. Ejemplo: ❤️ 💕 💖 💗 💓 💝 💘

### ¿Qué pasa si no tengo Python/Node.js/PHP?
No te preocupes, puedes abrir `index.html` directamente haciendo doble clic. Funciona perfectamente.

### ¿Puedo cambiar el idioma de los botones?
Sí, edita `index.html` y busca los textos "OPEN" y "RESET" para cambiarlos.

### ¿La carta funciona en móviles?
¡Sí! Está completamente optimizada para móviles, tablets y desktop.

### ¿Puedo agregar más texto?
Sí, la carta tiene scroll interno. Puedes escribir tanto texto como quieras en `mensaje.txt`.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos, animaciones y transiciones
- **JavaScript (ES6+)**: Manipulación del DOM y control de eventos

---

## 📝 Notas Importantes

- ⚠️ **Importante**: Para que los archivos `.txt` se carguen correctamente, debes usar un servidor local (no solo abrir el HTML directamente). Si abres directamente, el mensaje no se cargará.
- 💡 **Tip**: Si no quieres usar un servidor, puedes editar directamente el HTML y poner tu mensaje ahí, pero es más fácil usar los archivos `.txt`.
- 🔒 **Privacidad**: Si subes esto a GitHub Pages, tu mensaje será público. Considera hacer el repositorio privado si es algo muy personal.

---

## 🎯 Objetivo del Proyecto

Crear una experiencia romántica e interactiva usando solo tecnologías web básicas, demostrando que se puede hacer algo hermoso y significativo con código simple y limpio.

---

## 📄 Licencia

Este proyecto es de código abierto. Siéntete libre de usarlo y modificarlo para tus propios propósitos.

---

**Hecho con ❤️ para San Valentín**

¿Necesitas ayuda? Abre un issue en el repositorio o contacta al creador.
