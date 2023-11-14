import { Component, OnInit } from '@angular/core';
import { AgremiadosService } from 'src/app/services/agremiados.service';
interface Agremiado {
  id: number;
  apellidopaterno: string;
  apellidomaterno: string;
  nombres: string;
  sexo:string;
  NUP:string;
  NUE: string;
  RFC: string;
  NSS: string;
  fechadenacimiento:string;
  telefono: string;
  cuota: number;

}

@Component({
  selector: 'app-veragremiados',
  templateUrl: './veragremiados.component.html',
  styleUrls: ['./veragremiados.component.scss'],
})
export class VeragremiadosComponent implements OnInit {

  agremiados: Agremiado[]=[];

  constructor(private agremiadoservice:AgremiadosService) {
    this.getagremiados();
   }

  ngOnInit() { }

  getagremiados() {
    this.agremiados=[]
    this.agremiadoservice.getagremiados().subscribe((res:any)=>{
  
      console.log('Agremiados',res);  
      this.agremiados=res;
      this.agremiados.reverse();
   
    })


  }

}
