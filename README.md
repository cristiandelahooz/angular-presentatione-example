# Este proyecto fue generado usando Angular CLI versión 19.1.2.

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener lo siguiente:

1. **Conocimientos Básicos**
   - Familiaridad con **TypeScript** (superconjunto de JavaScript).
   - Comprensión de **HTML** y **CSS** para construir interfaces.

2. **Herramientas**
   - **Node.js:** Entorno de ejecución de JavaScript.  
   - **pnpm:** Alternativa rápida a npm (obligatorio para este proyecto).  
   - **CLI:** Capacidad para usar comandos en terminal.

---

## Configuración por Sistema Operativo

### Windows
1. **Instalar Node.js** desde [nodejs.org](https://nodejs.org) (marca la opción de añadir al PATH).  
2. **Verificar instalación:**  
   ```bash
   node -v
   npm -v
   ```
3. **Instalar pnpm y Angular CLI:**  
   ```bash
   npm install -g pnpm @angular/cli
   ```
4. **Crear proyecto Angular y navegar al directorio:**  
   ```bash
   ng new <nombre-del-proyecto>
   cd <nombre-del-proyecto>
   ```

### Unix (Linux/macOS)
1. **Instalar Node.js:**  
   - **Ubuntu:**  
     ```bash
     sudo apt update
     sudo apt install nodejs npm
     ```
   - **macOS (Homebrew):**  
     ```bash
     brew install node
     ```
2. **Verificar instalación:**  
   ```bash
   node -v
   npm -v
   ```
3. **Instalar pnpm y Angular CLI:**  
   ```bash
   npm install -g pnpm @angular/cli
   ```
4. **Crear proyecto Angular y navegar al directorio:**  
   ```bash
   ng new <nombre-del-proyecto>
   cd <nombre-del-proyecto>
   ```

---
>[!IMPORTANT]
>## Comandos pnpm
>| Comando        | Descripción                           |
>|----------------|---------------------------------------|
>| `pnpm install` | Instala dependencias del proyecto.    |
>| `pnpm start`   | Inicia el servidor de desarrollo.     |
>| `pnpm build`   | Compila el proyecto para producción.  |
>| `pnpm test`    | Ejecuta pruebas unitarias.            |

---

## Desarrollo y Pruebas

1. **Servidor de Desarrollo:**  
   Ejecuta `pnpm start` y accede a `http://localhost:4200/`. Los cambios en los archivos fuente recargarán la aplicación automáticamente.

2. **Creación de Componentes:**  
   Usa el siguiente comando para generar un nuevo componente:  
   ```bash
   ng generate component <nombre>
   ```

3. **Construcción del Proyecto:**  
   Para compilar y optimizar:  
   ```bash
   pnpm build
   ```

4. **Pruebas:**  
   - **Unitarias:**  
     ```bash
     pnpm test
     ```
   - **End-to-End:**  
     ```bash
     pnpm e2e
     ```

---

## Recursos Adicionales

- [Guía de Angular CLI](https://angular.dev/tools/cli)  
- [Documentación Oficial de Angular](https://angular.dev/overview)