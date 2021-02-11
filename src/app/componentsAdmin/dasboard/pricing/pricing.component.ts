import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import { PricingApiServiceService } from '../../../services/pricing-api-service.service';
import { PricingI } from '../../../models/pricing.interface';



@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {


  constructor(
    private formBuilder: FormBuilder,
    public pricing: PricingApiServiceService
  ) {
    this.buildForm1();
    this.pricing.getPricingOne();

    this.buildForm2();
    this.pricing.getPricingTow();

    this.buildForm3();
    this.pricing.getPricingThree();
  }

  private pricingForm1: FormGroup;
  dataPriceOne: PricingI[];
  dataPriceOneId;

  private pricingForm2: FormGroup;
  dataPriceTow: PricingI[];
  dataPriceTowId;

  private pricingForm3: FormGroup;
  dataPriceThree: PricingI[];
  dataPriceThreeId;

  ngOnInit(): void {
    this.pricing.getPricingOne()
    .subscribe( p1 => {
      this.dataPriceOne = p1; // ID
    });

    this.pricing.getPricingTow()
    .subscribe( p2 => {
      this.dataPriceTow = p2; // ID
    });

    this.pricing.getPricingThree()
    .subscribe( p3 => {
      this.dataPriceThree = p3; // ID
    });
  }

  private buildForm1() {
    this.pricingForm1 = this.formBuilder.group({
      id              : ['', [Validators.required]],
      title           : ['', [Validators.required]],
      price           : ['', [Validators.required]],
      characteristic1 : ['', [Validators.required]],
      characteristic2 : ['', [Validators.required]],
      characteristic3 : ['', [Validators.required]],
      characteristic4 : [''],
      characteristic5 : [''],
      characteristic6 : [''],
      characteristic7 : [''],
      characteristic8 : ['']
    });
  }

  private buildForm2() {
    this.pricingForm2 = this.formBuilder.group({
      id              : ['', [Validators.required]],
      title           : ['', [Validators.required]],
      price           : ['', [Validators.required]],
      characteristic1 : ['', [Validators.required]],
      characteristic2 : ['', [Validators.required]],
      characteristic3 : ['', [Validators.required]],
      characteristic4 : [''],
      characteristic5 : [''],
      characteristic6 : [''],
      characteristic7 : [''],
      characteristic8 : ['']
    });
  }

  private buildForm3() {
    this.pricingForm3 = this.formBuilder.group({
      id              : ['', [Validators.required]],
      title           : ['', [Validators.required]],
      price           : ['', [Validators.required]],
      characteristic1 : ['', [Validators.required]],
      characteristic2 : ['', [Validators.required]],
      characteristic3 : ['', [Validators.required]],
      characteristic4 : [''],
      characteristic5 : [''],
      characteristic6 : [''],
      characteristic7 : [''],
      characteristic8 : ['']
  });
  }

  onUpdatePricing1( data ) {
    this.pricing.pricing1 = Object.assign({}, data.value);
    this.pricing.updatePricingOne(data.value);
  }

  onUpdatePricing2( data ) {
    this.pricing.pricing2 = Object.assign({}, data.value);
    this.pricing.updatePricingTow(data.value);
  }

  onUpdatePricing3( data ) {
    this.pricing.pricing3 = Object.assign({}, data.value);
    this.pricing.updatePricingThree(data.value);
  }

  // Getters Form1

  get idField() {
    return this.pricingForm1.get('id');
  }

  get titleField() {
    return this.pricingForm1.get('titel');
  }

  get priceField() {
    return this.pricingForm1.get('price');
  }

  get characteristic1Field() {
    return this.pricingForm1.get('characteristic1');
  }

  get characteristic2Field() {
    return this.pricingForm1.get('characteristic1');
  }

  get characteristic3Field() {
    return this.pricingForm1.get('characteristic1');
  }

  get characteristic4Field() {
    return this.pricingForm1.get('characteristic1');
  }

  get characteristic5Field() {
    return this.pricingForm1.get('characteristic1');
  }

  get characteristic6Field() {
    return this.pricingForm1.get('characteristic1');
  }

  get characteristic7Field() {
    return this.pricingForm1.get('characteristic1');
  }

  get characteristic8Field() {
    return this.pricingForm1.get('characteristic1');
  }

   // Getters Form2

   get idField2() {
    return this.pricingForm2.get('id');
  }

  get titleField2() {
    return this.pricingForm2.get('titel');
  }

  get priceField2() {
    return this.pricingForm2.get('price');
  }

  get characteristic1Field2() {
    return this.pricingForm2.get('characteristic1');
  }

  get characteristic2Field2() {
    return this.pricingForm2.get('characteristic2');
  }

  get characteristic3Field2() {
    return this.pricingForm2.get('characteristic3');
  }

  get characteristic4Field2() {
    return this.pricingForm2.get('characteristic4');
  }

  get characteristic5Field2() {
    return this.pricingForm2.get('characteristic5');
  }

  get characteristic6Field2() {
    return this.pricingForm2.get('characteristic6');
  }

  get characteristic7Field2() {
    return this.pricingForm2.get('characteristic7');
  }

  get characteristic8Field2() {
    return this.pricingForm2.get('characteristic8');
  }

  // Getters Form3

  get idField3() {
    return this.pricingForm3.get('id');
  }

  get titleField3() {
    return this.pricingForm3.get('titel');
  }

  get priceField3() {
    return this.pricingForm3.get('price');
  }

  get characteristic1Field3() {
    return this.pricingForm3.get('characteristic1');
  }

  get characteristic2Field3() {
    return this.pricingForm3.get('characteristic2');
  }

  get characteristic3Field3() {
    return this.pricingForm3.get('characteristic3');
  }

  get characteristic4Field3() {
    return this.pricingForm3.get('characteristic4');
  }

  get characteristic5Field3() {
    return this.pricingForm3.get('characteristic5');
  }

  get characteristic6Field3() {
    return this.pricingForm3.get('characteristic6');
  }

  get characteristic7Field3() {
    return this.pricingForm3.get('characteristic7');
  }

  get characteristic8Field3() {
    return this.pricingForm3.get('characteristic8');
  }

}
