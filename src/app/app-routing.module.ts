import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { FormatosComponent } from './components/formatos/formatos.component';
import { ConvocatoriasComponent } from './components/convocatorias/convocatorias.component';
import { ConveniosComponent } from './components/convenios/convenios.component';
import { NuevoAgremiadoComponent } from './components/nuevo-agremiado/nuevo-agremiado.component';
import { VeragremiadosComponent } from './components/veragremiados/veragremiados.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { AgregarsolicitudComponent } from './components/agregarsolicitud/agregarsolicitud.component';



const routes: Routes = [
  {
    // Dirige en automático a Login al inicializar el proyecto
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'solicitudes',
    component: SolicitudesComponent
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
    path: 'ver-agremiado', component:VeragremiadosComponent
  },

  {
    path: 'agregar-solicitud', component:AgregarsolicitudComponent
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ReactiveFormsModule,
   FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
