import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MovieListComponent } from './components/movie-list.component';
import { FooterComponent } from './components/footer.component';
import { SelectedmovieComponent } from './components/selectedmovie.component';


@NgModule({
  declarations: [
  AppComponent,
  MovieListComponent, 
  SelectedmovieComponent,
  FooterComponent
  ],
  imports: [
  BrowserModule,
  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  })


export class AppModule { }
