import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
 
  email: string;
  password: string;
  msjError: string;

  constructor(private router: Router,
              private loginServ: LoginService) {

  }
 
  ngOnInit() {
    this.loginServ.getAuth().subscribe( auth => {
      if (auth) {
        this.router.navigate(['/']);
      }
    })
  }


  registro() {
     this.loginServ.registrarse(this.email, this.password)
     .then ( resp => {
      this.router.navigate(['/']);
     })
     .catch (error => {
      this.msjError = error;
     })
  }

}
