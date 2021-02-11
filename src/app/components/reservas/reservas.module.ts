import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReservasRoutingModule } from './reservas-routing.module';
import { ReservasformComponent } from './reservasform/reservasform.component';


@NgModule({
  declarations: [ReservasformComponent],
  imports: [
    CommonModule,
    ReservasRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReservasModule { }
