import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms';

import { FaqsApiService } from '../../../services/faqs-api.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {


  constructor(
    private formBuilder: FormBuilder,
    private faqsApi: FaqsApiService
  ) {
    this.buildForm();
   }

  // Getters

  get pregutnaField() {
    return this.formFaqs.get('pregunta');
  }

  get respuestaField() {
    return this.formFaqs.get('respuesta');
  }

  formFaqs: FormGroup;

  

  ngOnInit(): void {
  }

  private buildForm() {
    this.formFaqs = this.formBuilder.group({
      pregunta: ['', [Validators.required]],
      respuesta: ['', [Validators.required]]
    });
  }

  saveFaqs(data: any): void {
    const form = data.value;
    if (this.formFaqs.valid) {
      this.faqsApi.saveFaqs(form);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work in Faq\'s has been saved',
        showConfirmButton: false,
        timer: 1500
      });
      this.formFaqs.reset();
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Check all required fields',
        showConfirmButton: false,
        timer: 1500
      });
      this.formFaqs.markAllAsTouched();
    }
  }

}
