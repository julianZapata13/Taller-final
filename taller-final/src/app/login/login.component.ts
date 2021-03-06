import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario="";
  pass="";
  error=false;

  constructor(public servicePelicula: PeliculasService) { }

  
  ngOnInit(): void {
  }

  validarSesion(){

    if((this.servicePelicula.datosSesion[0].user)==(this.usuario)&&(this.servicePelicula.datosSesion[0].password)==(this.pass)){
      this.servicePelicula.cambiarSesion();
    }
    else{
      this.error=true;
    }
  }

 

}
