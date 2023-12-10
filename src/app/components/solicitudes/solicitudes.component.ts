import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from 'src/app/services/solicitudes.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss'],
})
export class SolicitudesComponent  implements OnInit {
  solicitudes: any[] = []; // Ajusta el tipo de datos según la estructura de tus solicitudes

  constructor(private solic: SolicitudesService) { }

  ngOnInit() {
    this.getsolicitud();
  }

  getsolicitud() {
    this.solic.getVersolicitud().subscribe(
      (data) => {
        this.solicitudes = data; // Asigna los datos recibidos al arreglo agremiados
        console.log('Datos obtenidos:', this.solicitudes); // Muestra los datos en la consola
      },
      (error) => {
        console.error('Error al obtener solicitud:', error);
      }
    );
  }

  descargarArchivo(nombreArchivo: string): void {
    console.log(nombreArchivo);
    this.solic.descargarArchivo(nombreArchivo).subscribe(
      (blob: Blob) => {
        console.log('Blob:', blob); // Muestra los datos en la consola
        // Crea un objeto URL para el blob y lo utiliza para abrir una nueva ventana o pestaña
        const url = window.URL.createObjectURL(blob);
        console.log(url);
        window.open(url, '_blank');
        window.URL.revokeObjectURL(url); // Libera recursos
      },
      (error) => {
        console.error('Error al descargar el archivo:', error);
        // Maneja el error según sea necesario
      }
    );
  }

}
