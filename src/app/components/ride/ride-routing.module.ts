import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TherideComponent } from './theride/theride.component';


const routes: Routes = [
  {
    path: '',
    component: TherideComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RideRoutingModule { }
