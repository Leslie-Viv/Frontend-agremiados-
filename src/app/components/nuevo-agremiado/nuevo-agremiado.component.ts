import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private fb:FormBuilder) { 
    this.Agremiado = this.fb.group({
      apellidopaterno:['',Validators.required],
        apellidomaterno:['',Validators.required],
        nombres:['',Validators.required],
         sexo:['',Validators.required],
         NUP:['',Validators.required],
         NUE:['',Validators.required],
         RFC:['',Validators.required],
         NSS:['',Validators.required],
        fechadenacimiento:['',Validators.required],
        telefono:['',Validators.required],
         cuota:[0,Validators.required]
    })
  }

  ngOnInit() {}

  guardar(){
    const data=this.Agremiado.value;
    this.agremiadoservice.nuevoagremiado(data).subscribe(res=>{
      console.log(res);
    })
  }

}
