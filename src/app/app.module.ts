import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ComentarioComponent } from './comentario/comentario.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ArticuloComponent,
    ComentarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
