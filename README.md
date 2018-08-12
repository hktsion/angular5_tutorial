# angular5_tutorial
Tutorial Angular5 con AngularCLI

Debemos tener instalada la última versión de NodeJS: https://nodejs.org/es/
Usaremos Angular CLI para instalar Angular5

PASO 1: Desinstalar paquetes anteriores de Angular CLI (si ya tienes la nueva versión, salta al PASO 3).
//desintalación de aquetes angular-CLI 1
> npm uninstall -g angular-cli 
//desintalación de aquetes angular-CLI 2
> npm uninstall -g @angular/cli 

//limpia la caché
> npm cache clean 

PASO 2: Instalar la última versión de Angular CLI
> npm install -g @angular/cli@latest 

PASO 3: Creación del proyecto.
ng new NOMBRE_DE_TU_PROYECTO

PASO 4: entra en el directorio de tu proyecto
> cd NOMBRE_DE_TU_PROYECTO
//inicia el servidor por el puerto 4200
> ng serve

PASO 5: Visualizar el proyecto. (por defecto el puerto es el 4200)
http://localhost:4200/ 

Con ésto se mostrará la primera página con Angular
