import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  msjError: string;

  constructor(private router: Router,
              private loginServ: LoginService ) {

  }
  ngOnInit() {
    this.loginServ.getAuth().subscribe( auth => {
      if (auth) {
        this.router.navigate(['/']);
      }
    })
  }

  login() {
    this.loginServ.login(this.email, this.password)
      .then( resp => {
        this.router.navigate(['/']);
      } )
      .catch( error => {
        this.msjError = "Usuario o contraseña incorrectos";
      } )
 
  }

  
}
