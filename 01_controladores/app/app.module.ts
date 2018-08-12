import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Importación de componentes
import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { ExplicacionComponent } from './explicacion/explicacion.component';


/*El decorador contiene varios elementos. En las DECLARATIONS, añadimos nuestros componentes*/
@NgModule({
  declarations: [
    AppComponent, VideoComponent,ExplicacionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
