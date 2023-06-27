import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ConfiguracionServicio } from "../servicios/configuracion.service";
import { Observable, map } from "rxjs";

@Injectable()
export class ConfiguracionGuard  {
    
    constructor( private router: Router,
                 private configService: ConfiguracionServicio ) {
    }

    canActivate(): Observable<boolean> {
        return this.configService.getConfig().pipe(
            map( config => {
                if ( config.registro) {
                    return true;
                } else {
                    this.router.navigate(['/login']);
                    return false;
                }
            })
        )
    }
}