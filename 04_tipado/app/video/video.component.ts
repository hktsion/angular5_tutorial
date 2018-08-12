import {Component} from '@angular/core'; //objeto para generar componentes

//Atributos y propiedades del componente
@Component({
	selector : 'videos',
	templateUrl: './video.templateurl.html',
	styleUrls: ['./video.style.css'] 
	})

export class VideoComponent{

	//tipado de objetos
	public general:object;
	public menor_1985:string;
	public buttons_txt:Array<string>;
	public videos:Array<object>;

	constructor(){
		this.general = { 'titulo' : 'Creación de componentes'};
		this.menor_1985 = 'lightblue';
		this.buttons_txt = ['VER MÁS', 'AMPLIAR NOTICIA', 'VER VÍDEO'];
		this.videos = [
		{'titulo' : 'Regreso al Futuro','year' : 1985,'img' : '../assets/img/futuro.jpg','sinopsis': 'La historia comienza en 1985 con Marty McFly, un joven normal de diecisiete años de edad que vive con su familia en la ficticia Hill Valley, California.'}, 
		{'titulo' : 'E.T. El extraterrestre','year' : 1982,'img' : '../assets/img/et.jpg','sinopsis': 'El filme comienza en Crescent City con un grupo de botánicos extraterrestres que reúnen muestras de la vegetación. Agentes del gobierno de EE.UU...'},
		{'titulo' : 'Los Goonies','year' : 1985,'img' : '../assets/img/goonies.jpg', 'sinopsis': 'Durante una tarde, los amigos, bastante desmotivados por la situación, suben al desván donde encuentran una gran variedad de objetos antiguos y extraños...'}];
	}


}