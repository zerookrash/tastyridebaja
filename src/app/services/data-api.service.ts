import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

import { AltasI } from '../models/altas.interface';
import { ReservaI } from '../models/reservas.interface';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor( private afs: AngularFirestore ) {
    this.toursCollection = afs.collection<AltasI>('toursTasty');
    this.reservasColection = afs.collection<ReservaI>('reservas');
    this.tours = this.toursCollection.valueChanges();
    this.reservations = this.reservasColection.valueChanges();
  }

  private toursCollection: AngularFirestoreCollection<AltasI>;
  private tours: Observable<AltasI[]>;
  private torusDoc: AngularFirestoreDocument<AltasI>;
  private tour: Observable<AltasI>;
  public selectTour: AltasI = {
    id: '',
    img: '',
    fileRef: '',
    title: '',
    price: '',
    descriptionShort: '',
    descriptionP1: '',
    descriptionP2: '',
    descriptionP3: '',
    descriptionP4: '',
  };

  private reservasColection: AngularFirestoreCollection<ReservaI>;
  private reservations: Observable<ReservaI[]>;
  private reservaDoc: AngularFirestoreDocument<ReservaI>;


 /* CRUD de los Tours */
 getAllTours() {
   return this.tours = this.toursCollection.snapshotChanges()
     .pipe(
       map( changes => {
        return changes.map( action => {
          const data = action.payload.doc.data() as AltasI;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
 }

 getOneTour(idTour: string) {
   this.torusDoc = this.afs.doc<AltasI>(`toursTasty/${idTour}`);
   return this.tour = this.torusDoc.snapshotChanges().pipe(
     map( action => {
       if (action.payload.exists === false) {
          return null;
       } else {
         const data = action.payload.data() as AltasI;
         data.id = action.payload.id;
         return data;
       }
     }));
 }

 addTours( tour: AltasI ): void {
    this.toursCollection.add(tour);
 }


 updateTour( tour: AltasI ): void {
   const idTour = tour.id;
   this.torusDoc = this.afs.doc<AltasI>(`toursTasty/${idTour}`);
   this.torusDoc.update(tour);
 }


 deleteTour( idTour: AltasI ): void {
   this.torusDoc = this.afs.doc<AltasI>(`toursTasty/${idTour}`);
   this.torusDoc.delete();
 }

/* Reservas */

saveReservas( newReserva: ReservaI ): void {
  this.reservasColection.add(newReserva);
}

getAllReservas() {
  return this.reservations = this.reservasColection.snapshotChanges()
     .pipe(
       map( changes => {
        return changes.map( action => {
          const data = action.payload.doc.data() as ReservaI;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
}

deleteReserv( idTour: ReservaI ): void {
  this.reservaDoc = this.afs.doc<ReservaI>(`reservas/${idTour}`);
  this.reservaDoc.delete();
}



}
