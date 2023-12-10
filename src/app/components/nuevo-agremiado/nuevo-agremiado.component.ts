import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AgremiadosService } from 'src/app/services/agremiados.service';

@Component({
  selector: 'app-nuevo-agremiado',
  templateUrl: './nuevo-agremiado.component.html',
  styleUrls: ['./nuevo-agremiado.component.scss'],
})
export class NuevoAgremiadoComponent  implements OnInit {

  Agremiado!:FormGroup;

  constructor(
    private agremiadoservice:AgremiadosService,
    private fb:FormBuilder,
    private router:Router) { 
    this.Agremiado = this.fb.group({
      apellidopaterno:['',Validators.required],
        apellidomaterno:['',Validators.required],
        nombres:['',Validators.required],
         sexo:[''],
         NUP:['',Validators.required],
         NUE:['',Validators.required],
         RFC:['',Validators.required],
         NSS:['',Validators.required],
        fechadenacimiento:['',Validators.required],
        telefono:['',Validators.required],
         cuota:['',Validators.required]
    })
  }

  ngOnInit() {}

  
  newAgremiado() {
    const infoNewAgremiado = this.Agremiado.value;

    this.agremiadoservice.nuevoagremiado(infoNewAgremiado).subscribe(
      response => {
        console.log('Agremiado agregado correctamente', response);
        this.router.navigate(['/homeAdmin']);
      },
      error => {
        console.error('Error al agregar agremiado', error);
      }
    );
  }

}
