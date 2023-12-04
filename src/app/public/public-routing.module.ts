import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginAdminComponent } from './views/login-admin/login-admin.component';


const routes: Routes = [


  {path:'login-admin',component:LoginAdminComponent},
  {path:'',redirectTo:"login-admin",pathMatch:"full"}
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
