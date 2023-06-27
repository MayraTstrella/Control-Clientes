import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Configuracion } from 'src/app/modelo/configuracion.model';
import { ConfiguracionServicio } from 'src/app/servicios/configuracion.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {
  
  registro = false;


  constructor( private router: Router,
               private configService: ConfiguracionServicio ) {

  }

  ngOnInit() {
    this.configService.getConfig().subscribe(
      (configuracion: Configuracion) => { 
        this.registro = configuracion.registro;
      }
    )


  }

  guardar() {
    let config = {registro: this.registro};
    this.configService.modificarConfig(config);
    this.router.navigate(['/']);
  }

}
