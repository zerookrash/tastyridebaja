import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators, FormGroup } from '@angular/forms';

// Servicios
import { DataDbService } from '../../../services/data-db.service';

// Sweet Alert 2
import Swal from 'sweetalert2';



@Component({
  selector: 'app-altas-component',
  templateUrl: './altas-component.component.html',
  styleUrls: ['./altas-component.component.css']
})
export class AltasComponentComponent implements OnInit {

  formAlta: FormGroup;
  private image: any;

  constructor(
    private formBuilder: FormBuilder,
    private dbData: DataDbService
    ) {
      window.scroll(0, 0);
      this.buildForm();
    }


  ngOnInit(): void {
  }


  private buildForm() {
    this.formAlta = this.formBuilder.group({
      img: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      descriptionShort: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(450)]],
      descriptionP1: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(600)]],
      descriptionP2: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(600)]],
      descriptionP3: ['', [Validators.maxLength(600)]],
      descriptionP4: ['', [Validators.maxLength(600)]],
    });
  }

  saveAlta(data: any): void {
    const form = data.value;
    if (this.formAlta.valid) {
      this.dbData.preAddAndUpdateForm( form, this.image );
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      });
      this.formAlta.reset();
    } else {
      this.formAlta.markAllAsTouched();
    }
  }

  handeleImage( event: any ): void {
    this.image = event.target.files[0];
  }

  //  Getters

  get imgField() {
    return this.formAlta.get('img');
  }

  get titleField() {
    return this.formAlta.get('title');
  }

  get priceField() {
    return this.formAlta.get('price');
  }

  get descriptionShortField() {
    return this.formAlta.get('descriptionShort');
  }

  get descriptionP1Field() {
    return this.formAlta.get('descriptionP1');
  }

  get descriptionP2Field() {
    return this.formAlta.get('descriptionP2');
  }

  get descriptionP3Field() {
    return this.formAlta.get('descriptionP3');
  }

  get descriptionP4Field() {
    return this.formAlta.get('descriptionP4');
  }




}
