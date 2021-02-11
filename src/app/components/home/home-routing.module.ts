import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomecontentComponent } from './homecontent/homecontent.component';


const routes: Routes = [
  {
    path: '',
    component: HomecontentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
