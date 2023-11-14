import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AgremiadosService {

private URL='http://localhost:8000/api';

  constructor(private http:HttpClient) { }

  getagremiados(){
    return this.http.get(`${this.URL}/agremiado`)
  }

  nuevoagremiado(datos:any){
    return this.http.post(`${this.URL}/nuevoagremiado`,datos)
  }
}
