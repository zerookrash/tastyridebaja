import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaqcontentComponent } from './faqcontent/faqcontent.component';


const routes: Routes = [
  {
    path: '',
    component: FaqcontentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqRoutingModule { }
