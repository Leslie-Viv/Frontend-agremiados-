import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NuevoAgremiadoComponent } from './nuevo-agremiado/nuevo-agremiado.component';
import { VeragremiadosComponent } from './veragremiados/veragremiados.component';
@NgModule({
    declarations: [
     NuevoAgremiadoComponent,
     VeragremiadosComponent 
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
        VeragremiadosComponent
  
    ]
  })

  export class ComponentsModule {}
