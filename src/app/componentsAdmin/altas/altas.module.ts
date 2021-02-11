import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';


import { AltasRoutingModule } from './altas-routing.module';
import { AltasComponentComponent } from './altas-component/altas-component.component';


@NgModule({
  declarations: [ AltasComponentComponent ],
  imports: [
    CommonModule,
    AltasRoutingModule,
    ReactiveFormsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
  ],
  providers: []
})
export class AltasModule { }
