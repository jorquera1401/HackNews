import { DecimalPipe } from '@angular/common';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import {  HackernewsApiService} from "../hackernews-api.service";

import { ActivatedRoute,ParamMap } from "@angular/router";

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
  numero : number;
  constructor(private activatedRouter:ActivatedRoute ,private _hackerNewsAPIService:HackernewsApiService) { 
    this.comentarios=[];
    this.kids=[];
    this.personas=[];
    this.articulo="";
    this.id=0;
  }
  /**
   * Recibe el id en el parametro del explorador 
   * Se busca los comentarios 
   */
  ngOnInit(): void {
    
    this.activatedRouter.paramMap.subscribe((parametros:ParamMap)=>{
      this.numero=parseInt(parametros.get('id'));
    })
    this._hackerNewsAPIService.getComentario(this.numero).subscribe(
      data=>{
        if(data)
          this.agregarStory(data);
      }
    );
  }
  /**
   * verifica si es una historia o no
   * @param elemento JSON de la historia
   */
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
   * crea un objeto de los comentario con el nombre y el texto
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
