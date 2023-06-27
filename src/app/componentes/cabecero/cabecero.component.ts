import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfiguracionServicio } from 'src/app/servicios/configuracion.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  loggedIn: boolean;
  loggedInUser: string;
  registro: boolean;

  constructor( private logServ: LoginService,
               private router: Router,
               private configService: ConfiguracionServicio ) {

  }


  ngOnInit() {
    this.logServ.getAuth().subscribe( auth => {
      if(auth) {
        this.loggedIn = true;
        this.loggedInUser = auth.email;
      }
      else {
        this.loggedIn = false;
      }
    } )

    this.configService.getConfig().subscribe(configuracion => { 
       this.registro = configuracion.registro;
    })
  }

  logout() {
    this.logServ.logout();
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }
}
