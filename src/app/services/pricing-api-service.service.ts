import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { map, catchError } from 'rxjs/operators';
import { PricingI } from '../models/pricing.interface';

@Injectable({
  providedIn: 'root'
})
export class PricingApiServiceService {

  constructor(
    private afs: AngularFirestore
  ) {
    // Pricing Table One <==
    this.pricingCollection1 = afs.collection<PricingI>('pricing1');
    this.pricings1 = this.pricingCollection1.valueChanges();

    // Pricing Table Tow =<=
    this.pricingCollection2 = afs.collection<PricingI>('pricing2');
    this.pricings2 = this.pricingCollection2.valueChanges();

    // Pricing Table Three =<=
    this.pricingCollection3 = afs.collection<PricingI>('pricing3');
    this.pricings3 = this.pricingCollection3.valueChanges();
   }

   // Pricing Table One <==
   private pricingCollection1: AngularFirestoreCollection<PricingI>;
   private pricingOneDoc: AngularFirestoreDocument<PricingI>;
   public pricings1;
   // Pricing Table Tow =<=
   private pricingCollection2: AngularFirestoreCollection<PricingI>;
   private pricingTowDoc: AngularFirestoreDocument<PricingI>;
   public pricings2;
   // Pricing Table Three ==<
   private pricingCollection3: AngularFirestoreCollection<PricingI>;
   private pricingThreeDoc: AngularFirestoreDocument<PricingI>;
   public pricings3;

  // Pricing Table One <==
   public pricing1: PricingI = {
    id              : '',
    title           : '',
    price           : '',
    characteristic1 : '',
    characteristic2 : '',
    characteristic3 : '',
    characteristic4 : '',
    characteristic5 : '',
    characteristic6 : '',
    characteristic7 : '',
    characteristic8 : ''
   };

    // Pricing Table Tow =<=
    public pricing2: PricingI = {
      id              : '',
      title           : '',
      price           : '',
      characteristic1 : '',
      characteristic2 : '',
      characteristic3 : '',
      characteristic4 : '',
      characteristic5 : '',
      characteristic6 : '',
      characteristic7 : '',
      characteristic8 : ''
     };

    //  Pricing Table Three ==<
    public pricing3: PricingI = {
      id              : '',
      title           : '',
      price           : '',
      characteristic1 : '',
      characteristic2 : '',
      characteristic3 : '',
      characteristic4 : '',
      characteristic5 : '',
      characteristic6 : '',
      characteristic7 : '',
      characteristic8 : ''
     };

     // Pricing Table One <==
   getPricingOne() {
     return this.pricings1 = this.pricingCollection1.snapshotChanges()
       .pipe(
         map( changes => {
           return changes.map( action => {
             const data = action.payload.doc.data() as PricingI;
             data.id = action.payload.doc.id;
             this.pricing1 = data;
             return data;
           });
         }));
   }

  updatePricingOne( pricings1 ) {
    const pricingId = pricings1.id;
    this.pricingOneDoc = this.afs.doc<PricingI>(`pricing1/${pricingId}`);
    this.pricingOneDoc.update(pricings1);
   }

   // Pricing Table Tow =<=
   getPricingTow() {
     return this.pricings2 = this.pricingCollection2.snapshotChanges()
       .pipe(
         map( changes => {
           return changes.map( action => {
             const data = action.payload.doc.data() as PricingI;
             data.id = action.payload.doc.id;
             this.pricing2 = data;
             return data;
           });
         }));
   }

  updatePricingTow( pricings2 ) {
    const pricingId = pricings2.id;
    this.pricingTowDoc = this.afs.doc<PricingI>(`pricing2/${pricingId}`);
    this.pricingTowDoc.update(pricings2);
   }

   // Pricing Table Three ==<
   getPricingThree() {
    return this.pricings3 = this.pricingCollection3.snapshotChanges()
      .pipe(
        map( changes => {
          return changes.map( action => {
            const data = action.payload.doc.data() as PricingI;
            data.id = action.payload.doc.id;
            this.pricing3 = data;
            return data;
          });
        }));
  }

 updatePricingThree( pricings3 ) {
   const pricingId = pricings3.id;
   this.pricingThreeDoc = this.afs.doc<PricingI>(`pricing3/${pricingId}`);
   this.pricingThreeDoc.update(pricings3);
  }



}
