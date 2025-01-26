# Documentación

Este proyecto fue generado usando Angular CLI versión 19.1.2.

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener el siguiente conocimiento y herramientas:

### 1. Conocimientos Básicos de Programación
- **Familiaridad con TypeScript:** Las aplicaciones Angular están escritas en TypeScript, un superconjunto tipado de JavaScript.  
- **Comprensión de HTML y CSS:** Para construir interfaces de usuario.

### 2. Interfaz de Línea de Comandos (CLI)
- **Capacidad para navegar y ejecutar comandos** en un terminal o consola.

### 3. Node.js y npm/pnpm
- **Node.js:** Un entorno de ejecución de JavaScript necesario para el desarrollo con Angular.  
- **npm (Node Package Manager)** o **pnpm (una alternativa más rápida a npm):** Para gestionar las dependencias del proyecto.

---

## Configuración

### Sistemas Windows
1. **Instalar Node.js**  
   - Descarga e instala la versión LTS de Node.js desde [nodejs.org](https://nodejs.org).  
   - Durante la instalación, marca la casilla para agregar Node.js al PATH del sistema.

2. **Verificar la Instalación**  
   Abre el símbolo del sistema y ejecuta:  
   ```bash
   node -v
   npm -v
   ```  
   Si está instalado, verás las versiones de Node.js y npm.

3. **Instalar pnpm (Opcional)**  
   ```bash
   npm install -g pnpm
   ```

4. **Instalar Angular CLI**  
   ```bash
   npm install -g @angular/cli
   ```

5. **Crear un Nuevo Proyecto Angular**  
   ```bash
   ng new <nombre-del-proyecto>
   ```  
   Sigue las indicaciones para configurar tu proyecto.

6. **Navegar al Directorio del Proyecto**  
   ```bash
   cd <nombre-del-proyecto>
   ```

---

### Sistemas Unix (Linux/macOS)
1. **Instalar Node.js**  
   - Usa tu gestor de paquetes para instalar Node.js o descárgalo desde [nodejs.org](https://nodejs.org).  

   #### Ubuntu:
   ```bash
   sudo apt update
   sudo apt install nodejs npm
   ```  

   #### macOS (Homebrew):
   ```bash
   brew install node
   ```

2. **Verificar la Instalación**  
   ```bash
   node -v
   npm -v
   ```  

3. **Instalar pnpm (Opcional)**  
   ```bash
   npm install -g pnpm
   ```

4. **Instalar Angular CLI**  
   ```bash
   npm install -g @angular/cli
   ```

5. **Crear un Nuevo Proyecto Angular**  
   ```bash
   ng new <nombre-del-proyecto>
   ```  

6. **Navegar al Directorio del Proyecto**  
   ```bash
   cd <nombre-del-proyecto>
   ```

---

## Guía de Desarrollo

### Servidor de Desarrollo
Para iniciar un servidor de desarrollo local, ejecuta:  
```bash
ng serve
```  
Una vez que el servidor esté en funcionamiento, abre tu navegador y navega a `http://localhost:4200/`. La aplicación se recargará automáticamente cada vez que modifiques los archivos fuente.

---

### Creación de Código
Angular CLI incluye herramientas de creación de código. Para generar un nuevo componente, ejecuta:  
```bash
ng generate component component-name
```  
Para obtener una lista completa de los esquemas disponibles (como components, directives o pipes), ejecuta:  
```bash
ng generate --help
```

---

### Construcción del Proyecto
Para compilar el proyecto, ejecuta:  
```bash
ng build
```  
Esto compilará tu proyecto y almacenará los artefactos de compilación en el directorio `dist/`. De forma predeterminada, la compilación en modo producción optimiza tu aplicación para rendimiento y velocidad.

---

## Pruebas

### 1. Pruebas Unitarias
Para ejecutar pruebas unitarias con el ejecutor Karma, utiliza el siguiente comando:  
```bash
ng test
```

### 2. Pruebas End-to-End
Para pruebas end-to-end (e2e), ejecuta:  
```bash
ng e2e
```  
**Nota:** Angular CLI no incluye un framework de pruebas e2e por defecto. Puedes elegir uno que se ajuste a tus necesidades, como Cypress o Playwright.

---

## Recursos Adicionales
- Para más información sobre cómo usar Angular CLI, visita la [Guía de Angular CLI](https://angular.dev/tools/cli).
- Si estás comenzando o deseas profundizar en Angular, consulta la [Documentación Oficial de Angular](https://angular.dev/overview), que incluye tutoriales, conceptos clave y prácticas recomendadas para dominar el framework.