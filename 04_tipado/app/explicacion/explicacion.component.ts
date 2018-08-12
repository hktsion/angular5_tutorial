import {Component} from '@angular/core';

//Atributos y propiedades del componente
@Component({
	selector : 'explicacion',
	templateUrl: './explicacion.templateurl.html',
	 styleUrls: ['./explicacion.style.css'] 
	})



export class ExplicacionComponent{
	public explicacion:Object = {};

	constructor(){
		this.explicacion = {
		'titulo': ' ¿Qué son los componentes en Angular? ',
		'descripcion': 'Un componente es un elemento lógico. Todo dentro de Angular son componentes. Podemos tener componentes para la cabecera, el aside, el footer, para una nueva funcionalidad, para un elemento que reciba un dato, lo procese y lo muestre, etc...',
		'descripcion2': 'Un componente no es más que un trozo de código que controla un trozo de pantalla.<br>Es un <strong>CONTROLADOR</strong>, que sirve de intermediario entre la lógica y la vista.',
		'descripcion3': 'Dentro de un componente tenemos los <strong>DECORADORES</strong> que permiten cargar metadatos, que describen los componentes y las relaciones. El decorador introduce propiedades dinámicas que permiten configurar los componentes.'
	}
	}
}