import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { FormatosComponent } from './components/formatos/formatos.component';
import { ConvocatoriasComponent } from './components/convocatorias/convocatorias.component';
import { ConveniosComponent } from './components/convenios/convenios.component';
import { NuevoAgremiadoComponent } from './components/nuevo-agremiado/nuevo-agremiado.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./public/public.module').then( m => m.PublicModule)
  },
  {
    path: 'home-admin', component:HomeAdminComponent
  },
  {
    path: 'formatos', component:FormatosComponent
  },
  {
    path: 'convocatorias', component:ConvocatoriasComponent
  },
  {
    path: 'convenios', component:ConveniosComponent
  },
  {
    path: 'nuevo-agremiado', component:NuevoAgremiadoComponent
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
