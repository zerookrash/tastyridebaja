import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleTourComponentComponent } from './detalle-tour-component/detalle-tour-component.component';


const routes: Routes = [
  {
    path: '',
    component: DetalleTourComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleTourRoutingModule { }
