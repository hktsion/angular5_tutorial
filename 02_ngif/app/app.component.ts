import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //etiqueta html para el componente dentro de index.html
  templateUrl: './app.component.html', //plantilla html que usa el componente
  styleUrls: ['./app.component.css'] //estilos css aplicados al componente
  })


export class AppComponent {
	public titulo =  'Componentes en Angular';
	public componente = {
		'titulo': 'CREACIÓN DE COMPONENTES',
		'descripcion': 'Es recomendable tener un directorio para los componentes.'
	}
}
