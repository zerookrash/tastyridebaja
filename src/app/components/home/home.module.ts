import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomecontentComponent } from './homecontent/homecontent.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PricingComponent } from './pricing/pricing.component';


@NgModule({
  declarations: [
    HomecontentComponent,
    CarouselComponent,
    PricingComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
