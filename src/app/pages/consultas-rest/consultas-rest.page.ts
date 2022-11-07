import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface IDatosPage {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Data[];
  support: Support;
}

interface IDatosUsuario {
  data: Data;
  support: Support;
}

interface Support {
  url: string;
  text: string;
}

interface Data {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

@Component({
  selector: 'app-consultas-rest',
  templateUrl: './consultas-rest.page.html',
  styleUrls: ['./consultas-rest.page.scss'],
})
export class ConsultasRestPage implements OnInit {

  constructor(private servidorRest: HttpClient) {

  }

  consultaGet() {
      // Declaramos el observable y lo inicializamos con una consulta GET
      let observableRest: Observable<IDatosUsuario> = this.servidorRest.get<IDatosUsuario>("https://reqres.in/api/users/2");

      // Nos suscribimos al observable y cuando recibimos datos los mostramos por consola
      observableRest.subscribe( datos => {
        console.log(datos);
      }); 
  }

  consultaGetPage() {
    // Declaramos el observable y lo inicializamos con una consulta GET
    let observableRest: Observable<IDatosPage> = this.servidorRest.get<IDatosPage>("https://reqres.in/api/users?page=2");

    // Nos suscribimos al observable y cuando recibimos datos los mostramos por consola
    observableRest.subscribe( datos => {
      console.log(datos);
    }); 
  }

  consultaPost() {
    let datos = {
      "name": "Pepe",
      "job": "Director"
    };
    // Declaramos el observable y lo inicializamos con una consulta POST. Emviamos también los nuevos datos
    let observableRest: Observable<any> = this.servidorRest.post<any>("https://reqres.in/api/users/", datos);

    // Nos suscribimos al observable y cuando recibimos la respuesta la mostramos por consola
    observableRest.subscribe( datos => {
      console.log(datos);
    });
  }

  consultaPut() {
    let datos = {
      "name": "Nora",
      "job": "profe"
    };
    // Declaramos el observable y lo inicializamos con una consulta PUT. Emviamos también los nuevos datos
    let observableRest: Observable<any> = this.servidorRest.put<any>("https://reqres.in/api/users/2", datos);

    // Nos suscribimos al observable y cuando recibimos la respuesta la mostramos por consola
    observableRest.subscribe( datos => {
      console.log(datos);
    });
  }



  ngOnInit() {
  }

}
