import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { map } from "rxjs";

@Injectable()
export class LoginService {

    constructor(private authServ: AngularFireAuth) {

    }


    login(email: string, password: string) {
        return new Promise((resolve, reject) => {
            this.authServ.signInWithEmailAndPassword(email, password).
            then(
                  datos => resolve(datos),
                   error => reject(error)
            )
        })
    }

   getAuth() {
    return this.authServ.authState.pipe(
        map( auth => auth)
    )
   }

   logout(){
    this.authServ.signOut();
   }

   registrarse( email: string, password: string) {
    return new Promise((resolve, reject) => {
        this.authServ.createUserWithEmailAndPassword(email, password).then(
            datos => resolve(datos),
            error => reject(error)
            
        )
    })

   }
}