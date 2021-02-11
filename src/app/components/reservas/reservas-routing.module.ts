import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservasformComponent } from './reservasform/reservasform.component';



const routes: Routes = [
  {
    path: '',
    component: ReservasformComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservasRoutingModule { }
