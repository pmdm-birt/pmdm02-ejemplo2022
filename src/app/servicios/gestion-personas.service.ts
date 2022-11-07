import { IPersona } from './../interfaces/mis-interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GestionStorageService } from './gestion-storage.service';

@Injectable({
  providedIn: 'root'
})
export class GestionPersonasService {
  private personas: IPersona[] = [];

  constructor(private leerFichero: HttpClient, private gestionAlmacen: GestionStorageService) {
    
    let datosPromesa: Promise<IPersona[]> = gestionAlmacen.getObject("personas");

    // Si hay datos en local se recuperan. Si no se leen del fichero
    datosPromesa.then( datos => {
      if (datos) {
        this.personas.push(...datos);
      } else {
        this.getPersonasFichero();
      }
      console.log(datos);
      
    });
  }

  getPersonasFichero() {
    let datosFichero: Observable<IPersona[]>;

    datosFichero = this.leerFichero.get<IPersona[]>("/assets/datos/personas.json");

    datosFichero.subscribe(datos => {
      console.log(datos);
      this.personas.push(...datos);
      this.gestionAlmacen.setObject("personas", this.personas);
    });

  }

  getPersonas() {
    return this.personas;
  }

  // Insertar una nueva persona
  insertarPersona(id: string, nombre: string, apellido: string) {
    // Creamos la nueva IPersona
    let nuevaPersona: IPersona = {
      id: id,
      nombre: nombre,
      apellido: apellido
    };

    // La insertamos
    this.personas.push(nuevaPersona);
    this.gestionAlmacen.setObject("personas", this.personas);

    // this.personas = [...this.personas, nuevaPersona];  // Crea una copia del array para que el array sea inmutable

    console.log(this.personas);


  }

  // Borra la persona con el id dado
  borrarPersona(id: string) {

    // Busca la persona con el id dado. Utiliza una función anónima como parámetro
    let personaEncontrada: IPersona = this.personas.find(function(cadaPersona) { return cadaPersona.id == id });

    // Busca la persona con el id dado. Utiliza una función arrow como parámetro
    // let personaEncontrada: IPersona = this.personas.find((cadaPersona) => cadaPersona.id == id );
    
    console.log(personaEncontrada);
    if (personaEncontrada) {
      // Busca el índice de la persona
      let indice: number = this.personas.indexOf(personaEncontrada);
      console.log(indice);

      if (indice != -1) {
        // Borra la persona con el índice obtenido
        this.personas.splice(indice, 1);
        this.gestionAlmacen.setObject("personas", this.personas);

        // Genera un nuevo array sin el elemento a borrar y lo asigna
        // let inicio = this.personas.slice(0, indice);             // Copia primera parte del array
        // let final= this.personas.slice(indice + 1);              // Copia la parte final
        // this.personas = [...inicio, ...final];                   // Añade todos los elementos copiados
        
        console.log(this.personas);
      }
    }
  }
  
  modificarPersona(id: string, nombre: string, apellido: string) {
    // Busca la persona con el id dado. Utiliza una función anónima como parámetro
    let personaEncontrada: IPersona = this.personas.find(function(cadaPersona) { return cadaPersona.id == id });
    let indice: number = this.personas.indexOf(personaEncontrada);
    this.personas[indice].nombre = nombre;
    this.personas[indice].apellido = apellido;
    this.gestionAlmacen.setObject("personas", this.personas);
  }
}
