import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, map, catchError } from 'rxjs/operators';

import { FaqsI } from '../models/faqs.interface';

@Injectable({
  providedIn: 'root'
})
export class FaqsApiService {

  private faqsCollection: AngularFirestoreCollection<FaqsI>;
  private faqs: Observable<FaqsI[]>;
  private faqsDoc: AngularFirestoreDocument<FaqsI>;
  private faq: Observable<FaqsI>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.faqsCollection = this.afs.collection<FaqsI>('faqsTesty');
    this.faqs = this.faqsCollection.valueChanges();
   }

  saveFaqs(newFaqs): void {
     const faqsObj = {
       pregunta: newFaqs.pregunta,
       respuesta: newFaqs.respuesta
     };
     this.faqsCollection.add(faqsObj);
  }

  getAllFaqs() {
    return this.faqs = this.faqsCollection.snapshotChanges()
      .pipe(
        map( changes => {
          return changes.map( action => {
            const data = action.payload.doc.data() as FaqsI;
            // data.id = action.payload.doc.id;
            return data;
          });
        })
      );
  }




}
