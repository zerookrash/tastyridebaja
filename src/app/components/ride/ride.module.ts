import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireStorage } from '@angular/fire/storage';


import { RideRoutingModule } from './ride-routing.module';
import { TherideComponent } from './theride/theride.component';
import { ToursComponent } from './tours/tours.component';


@NgModule({
  declarations: [
    TherideComponent,
    ToursComponent
  ],
  imports: [
    CommonModule,
    RideRoutingModule
  ],
  providers: [AngularFireStorage]
})
export class RideModule { }
