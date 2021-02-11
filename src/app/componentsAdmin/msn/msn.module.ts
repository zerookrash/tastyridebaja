import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MsnRoutingModule } from './msn-routing.module';
import { MsnComponentComponent } from './msn-component/msn-component.component';



@NgModule({
  declarations: [MsnComponentComponent],
  imports: [
    CommonModule,
    MsnRoutingModule,
  ]
})
export class MsnModule { }
