import { IPersona } from './../../interfaces/mis-interfaces';
import { InsertarPage } from './../insertar/insertar.page';
import { AlertController, ModalController } from '@ionic/angular';
import { GestionPersonasService } from './../../servicios/gestion-personas.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Inyectamos el servicio para gestionar personas y el controlador de alertas
  constructor(public gestionPersonas: GestionPersonasService, private alerta: AlertController, private modal: ModalController) {}

  borrar(id: string) {
    this.gestionPersonas.borrarPersona(id);
  }

  modificar(persona: IPersona) {

    // Llamamos al método para crear y mostrar la alerta
    this.presentarAlerta(persona);

  }

  // Método que crea la ventana de alerta
  // Debemos definirlo como asíncrono con async para poder usar await en su interior
  // Los métodos create y present son métodos asíncronos que devuelven una promesa y se manejan con await
  async presentarAlerta(persona: IPersona) {
    const alert = await this.alerta.create({
      backdropDismiss: false,                 // No permite hacer nada más hasta contestar a la alerta
      header: 'Modificar',
      message: 'Actualiza los valores',
      inputs: [
        {
          name: 'ID',
          type: 'text',
          placeholder: 'Introduce id',
          value: persona.id
        },
        {
          name: 'Nombre',
          type: 'text',
          placeholder: 'Introduce nombre',
          value: persona.nombre
        },
        {
          name: 'Apellido',
          type: 'text',
          placeholder: 'Introduce id',
          value: persona.apellido
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: (data) => {
            // console.log(data);
            // console.log(data.ID);
            this.gestionPersonas.modificarPersona(data.ID, data.Nombre, data.Apellido);
          }
        }
      ]
    });

    await alert.present();
  }

  async presentarModal() {
    const modal = await this.modal.create({
      backdropDismiss: false,
      component: InsertarPage,
    });
    return await modal.present();
  }
  
}