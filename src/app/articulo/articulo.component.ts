import { ChangeDetectionStrategy, Component, NgModule, OnInit } from '@angular/core';
import {HackernewsApiService} from '../hackernews-api.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
})

export class ArticuloComponent implements OnInit {
  articulos : any;
  noticias:any;
  start:number;
  end:number;

  constructor(private _hackerNewsAPIService:HackernewsApiService) {
    this.noticias=[];
    this.start=0;
    this.end=50;
  }
  /**
   * Carga de los servicio a la API
   * */
  ngOnInit(): void {
    this._hackerNewsAPIService.getArticulos().subscribe(
      data=>{
        this.articulos = data;
        this.articulos.forEach((element:any) => {
          this._hackerNewsAPIService.getTitulo(element).subscribe(
            data=>{
              this.agregar(data)
            }
          )
        });
      }
    );  
  }
  /**
   * Agrega los resultados a un objeto, se almacena en una lista
   */
  agregar(elemento):void{
    let by = elemento['by'];
    let id = elemento['id'];
    let title= elemento['title'];
    let tipo = elemento['type'];
    let url = elemento['url']
    let score = elemento['score']
    let time = elemento['time']
    
    //Objeto para visualizar en el componenete html
    var noticia = {
      id:id,
      title:title,
      by:by,
      tipo:tipo,
      url:url,
      score:score,
      time:time
    }

    if(noticia.tipo=="story"){
      this.noticias.push(noticia)
    }

  }
  /**
   * Permite mostrar los siguientes articulos
   */
  avanzar():void{
    if(this.end<this.noticias.length){  
      this.start+=50;
      this.end+=50;
    }
    console.log(this.start, this.end)
  }
  /**
   * permite retroceder
   */
  atras():void{
    if(this.start>50){
      this.start-=50;
      this.end-=50;
    }
  }

}
