import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class HackernewsApiService {
  baseUrl : string;

  constructor(private http:HttpClient) {
    this.baseUrl = "https://hacker-news.firebaseio.com/v0/";
   }
   //Se envia los top articulos
   getArticulos():Observable<any>{
     return this.http.get('https://hacker-news.firebaseio.com/v0//topstories.json');
   }
   getTitulo(id:number):Observable<any>{
     return this.http.get('https://hacker-news.firebaseio.com/v0/item/'+id+'.json');
   }

   getComentario(id:number):Observable<any>{
     return this.http.get('https://hacker-news.firebaseio.com/v0/item/'+id+'.json');
   }
}