import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tilulo',
    loadChildren: () => import('./components/tilulo/tilulo.module').then( m => m.TiluloPageModule)
  },
  {
    path: 'modal1',
    loadChildren: () => import('./modal/modal1/modal1.module').then( m => m.Modal1PageModule)
  },
  {
    path: 'directives',
    loadChildren: () => import('./mudules/directives/directives.module').then( m => m.DirectivesPageModule)
  },
 {
    path: 'sobre',
    loadChildren: () => import('./pages/sobre/sobre.module').then( m => m.SobrePageModule)
  },
 {
    path: 'agenda',
    loadChildren: () => import('./pages/tab/agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./pages/tab/mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./pages/tab/sobre/sobre.module').then( m => m.SobrePageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
