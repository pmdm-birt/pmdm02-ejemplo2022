import { GestionPersonasService } from './../../servicios/gestion-personas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.page.html',
  styleUrls: ['./borrar.page.scss'],
})
export class BorrarPage implements OnInit {
  indice: string;

  constructor(private personas: GestionPersonasService) { }

  ngOnInit() {
  }

  onClick() {
    // Borrar
    this.personas.borrarPersona(this.indice);

  }
}
