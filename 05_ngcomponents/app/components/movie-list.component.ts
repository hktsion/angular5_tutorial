import { Component } from '@angular/core';
import { Movie } from '../models/movie.model';


//decorador
@Component({
	selector: 'movies-list',
	templateUrl: '../views/movies-list.template.html',
	styleUrls: ['../assets/css/movies-list.style.css']
	})

export class MovieListComponent{

	private title:string;
	private movies:Array<Movie>;
	private palabro:string;
	private mouseentermovie:Movie;

	constructor(){  
		this.title = 'LISTADO DE PELÍCULAS';
		this.movies = [];
		this.palabro = '';
		
		this.mouseentermovie = new Movie(1, '', '.', 0, [''], 0, [''], [{'author': '', 'theme': ''}],'',0);

		//id:number;
		//title:string;
		//description:string;
		//duration:number;
		//director:Array<string>;
		//year:number;
		//cast:Array<string>;
		//music:Array<object>;
		//imgsrc:string;
		//stars:number;

		this.movies.push(new Movie(1, 'Jurassic Park', 'Tres expertos y otras personas son invitados a un parque de diversiones, donde se encuentran dinosaurios creados en base al ADN.', 127, ['Steven Spielberg'], 1993, ['Jeff Goldblum', 'Laura Dern', 'Sam Neill', 'Richard Attenborough'], [{'author': 'John Williams', 'theme': 'Theme From Jurassic Park'}],'jurassic_park.jpg',4));
		this.movies.push(new Movie(2, 'El día de la marmota', 'Un meteorólogo arrogante tiene un amorío inusual con su productora cuando queda atrapado en el tiempo durante "El día de la Marmota".',101,['Harold Ramis'], 1993,['Bill Murray', 'Harold Ramis', 'Andie MacDowell', 'Stephen Tobolowsky', 'Chris Elliot'],[{'author': 'George Fenton', 'theme': 'I Got You Babe'}],'el_dia_de_la_marmota.jpg',4.5));
		this.movies.push(new Movie(3, 'Solo en casa','Un encantador niño de 8 años desafía a un torpe par de ladrones cuando, accidentalmente, sus padres lo olvidan en casa.',213,['Chris Columbus'], 1993,['Macaulay Culkin','Daniel Stern', 'Joe Pesci', 'John Heard', 'Catherine O\'Hara'],[{'author': 'John Williams', 'theme': 'Somewhere in My Memory'}],'solo_en_casa.jpg',4.5));
		this.movies.push(new Movie(4, 'Terminator','Un asesino cibernético del futuro es enviado a Los Ángeles, para matar a la mujer que procreará a un líder.',108,['James Cameron'], 1985,['Arnold Schwarzenegger', 'Linda Hamilton', 'Michael Biehn', 'Bill Paxton'],[{'author': 'Brad Fiedel', 'theme': 'Theme'}],'terminator.jpg',4));
		this.movies.push(new Movie(5, 'El club de la lucha','El lado oscuro de un trabajador de cuello blanco sale a flote en un club clandestino donde los hombres pelean a muerte.',151,['David Fincher'], 1999,['Brad Pitt', 'Edward Norton', 'Helena Bonham Carter', 'Jared Leto', 'Meat Loaf'],[{'author': '', 'theme': 'The Pixies - Where is my mind'}],'el_club_de_la_lucha.jpg',4));
		this.movies.push(new Movie(6, 'Doce Monos','Un prisionero (Bruce Willis) viaja en el tiempo y por error llega a 1990 donde es arrestado y recluido en un manicomio',131,['Terry Gilliam'], 1999,['Brad Pitt', 'Bruce Willis', 'Madeleine Stowe', 'Christopher Plummer', 'Jon Seda'],[{'author': 'Paul Buckmaster', 'theme': ''}],'12_monos.jpg',4));
		console.log(this.movies);
	}


	/* DISPARADORES EN LA LISTA DE PELÍCULAS */
	onChangeSelectedMovie(mouseentermovie){
		//usamos el evento (mouseenter)="onChangeSelectedMovie(movie)"
		this.mouseentermovie = mouseentermovie;
	}

}