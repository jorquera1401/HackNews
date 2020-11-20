import { DecimalPipe } from '@angular/common';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import {  HackernewsApiService} from "../hackernews-api.service";
@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {
  id:number;
  comentarios : any;
  kids : any;
  personas : any;
  articulo : string;
  fecha:Date;
  constructor(private _hackerNewsAPIService:HackernewsApiService) { 
    this.comentarios=[];
    this.kids=[];
    this.personas=[];
    this.articulo="";
    this.id=0;
  }

  ngOnInit(): void {
    this._hackerNewsAPIService.getComentario(8863).subscribe(
      data=>{
        this.agregarStory(data);
      }
    );
  }
  agregarStory(elemento):void{
    let kids = elemento["kids"];
    let tipo = elemento["type"];
  
    if(tipo=="story"){
      this.articulo = elemento["title"]
      let tiempo = elemento['time']
      this.comentarios.push(kids);
      this.fecha = new Date(tiempo)
      this.id = elemento["id"]
      
    }
    if(this.comentarios.length>0){
      this.buscarComentarios();
    }
  }
  /**
   * busca los kids que son los comentarios de una story
   */
  buscarComentarios():void{
    this.comentarios.forEach(element => {
      this.kids=element;
      this.kids.forEach(comment => {
        this._hackerNewsAPIService.getComentario(comment).subscribe(
          data=>{
            this.descomponerComentario(data);
          }
        )
      });
    });
  }
  /**
   * 
   * @param data json de comentarios de personas de una publicacion
   */
  descomponerComentario(data:any):void{
    let by = data['by'];
    let text=data['text'];
    let tiempo = data['time'];
    var comentario = {
      by:by,
      text:text,
      fecha:new Date(tiempo)
    }
    this.personas.push(comentario);
  }

}
