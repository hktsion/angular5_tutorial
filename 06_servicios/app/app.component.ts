import { Component } from '@angular/core';
import { MovieListComponent } from './components/movie-list.component';
import { SelectedmovieComponent } from './components/selectedmovie.component';
import { FooterComponent } from './components/footer.component';


@Component({
	selector: 'movie-root',
	templateUrl: './app.component.html'
	})


export class AppComponent {
	title = 'MONSTER FILMS \'90';
}
