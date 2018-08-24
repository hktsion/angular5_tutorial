import { Injectable } from '@angular/core';


/**
*SERVICIOS: 
* Los servicios se agregan mediante dependencias a los componentes.
* Facilitan la reutilización, son componentes que podemos usar dentro de componentes principales
* Actualizar campos
* Guardar datos en un modelo de datos.
* Hacer peticiones http
**/
@Injectable()


/**
* Para usar un servicio >> dentro de un componente:
* 	- importamos el inyecatble al componente
*	- le decimos al componente, que va a usar un servicio >> providers. 
* 	- utilizar dentro del constructor.
* De esta forma todo lo que contenga el servicio va a poder ser usado en el componente donde se ha inyectado la dependencia
**/
export class MovieService{


	saludar(){
		return "Hola mundo desde mi primer servicio";
	}

}