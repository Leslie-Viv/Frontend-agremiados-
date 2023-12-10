import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NuevoAgremiadoComponent } from './nuevo-agremiado/nuevo-agremiado.component';
import { VeragremiadosComponent } from './veragremiados/veragremiados.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { AgregarsolicitudComponent } from './agregarsolicitud/agregarsolicitud.component';
@NgModule({
    declarations: [
     NuevoAgremiadoComponent,
     VeragremiadosComponent,
     HomeAdminComponent,
     SolicitudesComponent,
     AgregarsolicitudComponent
    ],
    imports: [
      CommonModule,
      IonicModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
    ],
    exports: [
        NuevoAgremiadoComponent,
        VeragremiadosComponent,
        HomeAdminComponent,
        SolicitudesComponent,
        AgregarsolicitudComponent
  
    ]
  })

  export class ComponentsModule {}
