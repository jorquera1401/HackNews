import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ComentarioComponent } from './comentario/comentario.component';
//APi
import {FormsModule} from "@angular/forms";
import {  HttpClientModule} from "@angular/common/http";
import {HackernewsApiService} from "./hackernews-api.service";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ArticuloComponent,
    ComentarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HackernewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
