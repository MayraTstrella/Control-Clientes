import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { Observable, map } from "rxjs";

@Injectable()
export class AuthGuard {
    
    constructor( private router: Router,
                 private afauth: AngularFireAuth ) {

    }


    canActivate() : Observable<boolean> {
        return this.afauth.authState.pipe(
            map( auth => {
                if (!auth) {
                    this.router.navigate(['/login']);
                    return false;
                } else {
                    return true;
                }
            })
        )
    }
}