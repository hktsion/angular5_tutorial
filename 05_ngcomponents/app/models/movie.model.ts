export class Movie{

	private id:number;
	private title:string;
	private description:string;
	private duration:number;
	private director:Array<string>;
	private year:number;
	private cast:Array<string>;
	private music:Array<object>;
	private imgsrc:string;
	private stars:number;


	constructor(id, title,description,duration,director,year,cast,music,imgsrc,stars){
		this.id = id;
		this.title = title;
		this.description = description;
		this.duration = duration;
		this.director = director;
		this.year = year;
		this.cast = cast;
		this.music = music;
		this.imgsrc = imgsrc;
		this.stars = stars;
	}

}

