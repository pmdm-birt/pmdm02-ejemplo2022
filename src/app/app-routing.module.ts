import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'borrar',
    loadChildren: () => import('./pages/borrar/borrar.module').then( m => m.BorrarPageModule)
  },
  {
    path: 'insertar',
    loadChildren: () => import('./pages/insertar/insertar.module').then( m => m.InsertarPageModule)
  },
  {
    path: 'consultas-rest',
    loadChildren: () => import('./pages/consultas-rest/consultas-rest.module').then( m => m.ConsultasRestPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
