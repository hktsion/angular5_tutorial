import {Component} from '@angular/core'; //objeto para generar componentes


//Atributos y propiedades del componente
@Component({
	selector : 'videos',
	templateUrl: './video.templateurl.html',
	 styleUrls: ['./video.style.css'] 
	})

export class VideoComponent{

	private function bgcolor(year){
		year = Number(year);
		let bg = (year<1985) ? '0.08':'1';
		return bg;
	}

	public general = { 'titulo' : 'Creación de componentes'}
	public menor_1985 = 'lightblue';
	public videos = {
		'futuro': {
			'titulo' : 'Regreso al Futuro',
			'year' : 1985,
			'img' : '../assets/img/futuro.jpg',
			'sinopsis': 'La historia comienza en 1985 con Marty McFly, un joven normal de diecisiete años de edad que vive con su familia en la ficticia Hill Valley, California. Su padre es un hombre fracasado, tímido y de poco carácter con un empleo mal pagado donde tiene que soportar los constantes abusos de su jefe, Biff Tannen, quien desde el instituto le ha hecho la vida imposible. Asimismo, uno de sus tíos tiene antecedentes penales y ha sido arrestado en múltiples ocasiones y su familia tiene muchas deudas.',
			'show': true
		}, 
		'et': {
			'titulo' : 'E.T. El extraterrestre',
			'year' : 1982,
			'img' : '../assets/img/et.jpg',
			'sinopsis': 'El filme comienza en Crescent City con un grupo de botánicos extraterrestres que reúnen muestras de la vegetación. Agentes del gobierno de EE.UU. aparecen y los extraterrestres huyen en su nave espacial, dejando atrás a uno de los suyos en sus prisas. La escena cambia a un hogar en los suburbios de California, donde un niño llamado Elliott (Henry Thomas) hace de sirviente de su hermano mayor, Michael (Robert MacNaughton), y sus amigos (K. C. Martel, Sean Frye y C. Thomas Howell).',
			'show': true
			},
		'goonies': {
			'titulo' : 'Los Goonies',
			'year' : 1985,
			'img' : '../assets/img/goonies.jpg', 
			'sinopsis': 'Durante una tarde, los amigos, bastante desmotivados por la situación, suben al desván donde encuentran una gran variedad de objetos antiguos y extraños, propiedad del museo en el que trabaja el padre de Mikey y Brand. Entre ellos descubren un mapa que indica la ubicación de un supuesto tesoro perteneciente a un pirata conocido como "Willy el Tuerto", desaparecido con su tripulación siglos atrás mientras eran perseguidos por la armada británica después de que el pirata cometiese un gran robo.',
			'show': false
		}
	}
	
		

	

}