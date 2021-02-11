import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltasComponentComponent } from './altas-component/altas-component.component';


const routes: Routes = [
  {
    path: '',
    component: AltasComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AltasRoutingModule { }
