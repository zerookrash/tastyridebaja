import { Component, OnInit } from '@angular/core';
import { PricingApiServiceService } from '../../../services/pricing-api-service.service';
import { PricingI } from '../../../models/pricing.interface';


@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor(
    private ps: PricingApiServiceService
    ) { }

    public price1: PricingI;
    public price2: PricingI;
    public price3: PricingI;


  ngOnInit(): void {
    this.ps.getPricingOne()
      .subscribe( m => {
        this.price1 = m[0];
      });

    this.ps.getPricingTow()
      .subscribe( m => {
        this.price2 = m[0];
      });

    this.ps.getPricingThree()
      .subscribe( m => {
        this.price3 = m[0];
      });
  }

}
