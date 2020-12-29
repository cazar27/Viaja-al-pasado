import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';

import { of } from 'rxjs/observable/of';
import { Servicio, Ruta } from './../Clases/Servicio';
import { SERVICIOS } from './../Clases/listServicios';


@Injectable()
export class ServicioService {

    serviciosCollection: AngularFirestoreCollection<Servicio>;
    servicios: Observable<Servicio[]>;
    serviciosDoc: AngularFirestoreDocument<Servicio>;

  constructor(public ang: AngularFirestore) {
    this.serviciosCollection = this.ang.collection('servicios');

   }

  getServicios(): Observable<Servicio[]> {
    return this.servicios = this.serviciosCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
          const data = a.payload.doc.data() as Servicio;
          data.id = a.payload.doc.id;
          return data;
      });
    });
  }

  addServicio(servicio: Servicio) {
    this.serviciosCollection.add(servicio);
  }

}
