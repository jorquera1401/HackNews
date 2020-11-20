import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  ArticuloComponent} from "./articulo/articulo.component";
import {  ComentarioComponent} from "./comentario/comentario.component";

/**
 * Se agregan las rutas para acceder desde navegador
 */
const routes: Routes = [
  
  {
    path:'top',
    component:ArticuloComponent
  },
  {
    path:'story/:id',
    component:ComentarioComponent
  },
  { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) },
  {
    path:'',
    redirectTo:'/top', 
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
