import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AgremiadosService {

private URL='http://localhost:8000/api';

  constructor(private http:HttpClient) { }

  obtenerAgremiadoPorId(id: number): Observable<any>{
    return this.http.get<any>(`${this.URL}/obtenerAgremiadoId/${id}`);
  }

  getagremiados(){
    return this.http.get(`${this.URL}/agremiado`)
  }

  nuevoagremiado(datos:any){
    return this.http.post(`${this.URL}/nuevoagremiado`,datos)
  }

  eliminarAgremiado(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/eliminarAgremiado/${id}`);
  }
  
  actualizarAgremiado(id: number, datosActualizados: any): Observable<any> {
    return this.http.post<any>(`${this.URL}/actualizarAgremiado/${id}`, datosActualizados);
  }
  
}
