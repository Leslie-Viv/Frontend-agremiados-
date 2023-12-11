import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { AgremiadosService } from 'src/app/services/agremiados.service';
import Swal from 'sweetalert2';
import { AlertController, ModalController } from '@ionic/angular';
import { AlertsService } from 'src/app/services/alerts.service';


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
  fechadenacimiento: Date;
  telefono: string;
  cuota: number;

}

@Component({
  selector: 'app-veragremiados',
  templateUrl: './veragremiados.component.html',
  styleUrls: ['./veragremiados.component.scss'],
})
export class VeragremiadosComponent implements OnInit {

  @ViewChild('content', { static: false }) content: ElementRef<any>;

  agremiados: any[] = []; // Ajusta el tipo de datos según la estructura de tus agremiados

  constructor(  private modalCtrl: ModalController,private alertS: AlertsService,private alertCtrl: AlertController,private agremiadoservice:AgremiadosService) {
    this.content = {} as ElementRef;
   }

  ngOnInit() {
    this.getagremiados
   }

  getagremiados() {
    this.agremiados=[]
    this.agremiadoservice.getagremiados().subscribe((res:any)=>{
  
      console.log('Agremiados',res);  
      this.agremiados=res;
      this.agremiados.reverse();
   
    })


  }

  ngAfterViewInit() {
    this.getagremiados();
    
    // Llama a generarPDF después de que la vista se haya inicializado
    this.generarPDF();
  }

  generarPDF() {
    if (this.content && this.content.nativeElement) {
      const content: HTMLElement = this.content.nativeElement;
      console.log('Elemento content:', this.content.nativeElement);

      html2canvas(content).then((canvas) => {
        // Verifica que el canvas tenga contenido antes de continuar
        if (canvas.toDataURL('image/png') !== 'data:,') {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF();

          // Ajusta los valores según tus necesidades
          const imgWidth = 210;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;

          pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
          pdf.save('Listado de agremiados.pdf');
          console.log('Descargando pdf...');

        } else {
          console.error('El canvas está vacío o la imagen está dañada.');
        }
      });
    } else {
      console.error('Elemento content no encontrado o nulo.');
    }
  }


  async eliminarAgremiado(id: number) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar eliminación',
      mode: 'ios',
      message: '¿Seguro que deseas eliminar este agremiado?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (cancel) => {
            console.log('Cancelado');
          }
        }, {
          text: 'Sí',
          handler: () => {
            // Llamada a la función de servicio que envía la solicitud DELETE con el ID del producto
            this.agremiadoservice.eliminarAgremiado(id).subscribe(
              (response) => {
                // Manejar la respuesta exitosa aquí
                console.log('Agremiado eliminado con éxito', response);
                this.alertS.generateToast({
                  duration: 800,
                  color: 'danger',
                  icon: 'trash-outline',
                  message: 'Agremiado eliminado con éxito',
                  position: 'top',
                });
                this.agremiados = this.agremiados.filter(agremiado => agremiado.id !== id);
              },
              (error) => {
                console.error('Error al eliminar el agremiado', error);
              }
            );
          }
        }
      ]
    });
  
    await alert.present();
  }

 
}
