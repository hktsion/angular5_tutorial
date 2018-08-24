import { Component } from '@angular/core';

//Decorador
@Component({
	selector: 'footer',
	templateUrl: '../views/footer.template.html',
	styleUrls: ['../assets/css/footer.style.css']
	})


export class FooterComponent{

	private email:string;
	private src_web:string
	private src_github:string;
	private src_linkedin:string;
	private developed:string;

	constructor(){
		this.developed = 'Desarrollado con Angular';
		this.email = 'hectorochoa.bellon@gmail.com';
		this.src_web = 'https://hectorochoa.es';
		this.src_github = 'https://github.com/hktsion/';
		this.src_linkedin = 'https://www.linkedin.com/in/hector-developer/';
	}
}