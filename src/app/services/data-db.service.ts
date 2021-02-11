import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, map, catchError } from 'rxjs/operators';

import { MessageI } from '../models/message.interface';
import { AltasI } from '../models/altas.interface';


@Injectable({
  providedIn: 'root'
})

export class DataDbService {

  private contactCollection: AngularFirestoreCollection<MessageI>;
  private altasCollection: AngularFirestoreCollection;
  private filePath: any;
  private downloadURl: Observable<string>;
  private msns: Observable<MessageI[]>;
  private msnDoc: AngularFirestoreDocument<MessageI>

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage,
    ) {
    this.contactCollection = afs.collection<MessageI>('contactsTesty');
    this.altasCollection = afs.collection('toursTasty');
  }

  /* Subida de Formulario Contacto */
  saveMessage(newContact: MessageI): void {
    this.contactCollection.add(newContact);
  }

  // Obtener los registros de Contacto
  getAllMessage() {
    return this.msns = this.contactCollection.snapshotChanges()
    .pipe(
      map( changes => {
        return changes.map( action => {
          const data = action.payload.doc.data() as MessageI;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  onDeleteMsn(id) {
    this.msnDoc = this.afs.doc<MessageI>(`contactsTesty/${id}`);
    this.msnDoc.delete();
  }


  /* Creacion de registro de Firebase de los Tours */

  // Metodo intermedio para hacer la llamada de subida de imagen y de formulario
  public preAddAndUpdateForm( newTour: AltasI, image ): void {
    this.uploadImge(newTour, image);
  }

  // Subida de imagen
  private uploadImge(newTour: AltasI, image ) {
    this.filePath = `imagesTours/${image.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task.snapshotChanges()
    .pipe(
      finalize(() => {
        fileRef.getDownloadURL()
          .subscribe( urlImage => {
            this.downloadURl = urlImage;
            this.saveTour(newTour);
          });
      })
    ).subscribe();
  }

   // Subida de Formulario Altas Tours
   private saveTour(newTour: AltasI): void {
     const tourObj = {
      img: this.downloadURl,
      fileRef: this.filePath,
      title: newTour.title,
      price: newTour.price,
      descriptionShort: newTour.descriptionShort,
      descriptionP1: newTour.descriptionP1,
      descriptionP2: newTour.descriptionP2,
      descriptionP3: newTour.descriptionP3,
      descriptionP4: newTour.descriptionP4
    };
     this.altasCollection.add(tourObj);
  }


}
