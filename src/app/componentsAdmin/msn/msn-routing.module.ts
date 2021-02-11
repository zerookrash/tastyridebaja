import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsnComponentComponent } from './msn-component/msn-component.component';


const routes: Routes = [
  {
    path: '',
    component: MsnComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MsnRoutingModule { }
