import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { Configuracion } from "../modelo/configuracion.model";
import { Injectable } from "@angular/core";

@Injectable()
export class ConfiguracionServicio {
    
    configuracionDoc: AngularFirestoreDocument;
    configuracion: Observable<Configuracion>;

    id = '1';

    constructor( private db: AngularFirestore ) {

    }

    getConfig() : Observable<Configuracion> {
        this.configuracionDoc = this.db.doc<Configuracion>(`configuracion/${this.id}`); //accede a la coleccion de config en la bd
        this.configuracion = this.configuracionDoc.valueChanges();
        return this.configuracion;
    }

    modificarConfig( configuracion: Configuracion) {
        this.configuracionDoc = this.db.doc<Configuracion>(`configuracion/${this.id}`);
        this.configuracionDoc.update(configuracion);
    }
}