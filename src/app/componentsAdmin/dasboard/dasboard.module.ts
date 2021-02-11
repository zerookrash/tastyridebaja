import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { DasboardRoutingModule } from './dasboard-routing.module';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { TablatoursComponent } from './tablatours/tablatours.component';
import { FaqsComponent } from './faqs/faqs.component';
import { PricingComponent } from './pricing/pricing.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    DashboardComponentComponent,
    TablatoursComponent,
    FaqsComponent,
    PricingComponent,
    ModalComponent],
  imports: [
    CommonModule,
    DasboardRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DasboardModule { }
