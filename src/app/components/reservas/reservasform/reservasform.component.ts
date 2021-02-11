import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// Servicios
import { DataApiService } from '../../../services/data-api.service';

// Sweet Alert
import Swal from 'sweetalert2';


@Component({
  selector: 'app-reservasform',
  templateUrl: './reservasform.component.html',
  styleUrls: ['./reservasform.component.css']
})
export class ReservasformComponent implements OnInit {

  constructor( private dbData: DataApiService ) {
    this.reservasForm = this.createFormGroup();
   }

   emailPattern: any = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;a

   reservasForm: FormGroup;

  createFormGroup() {
    return new FormGroup({
      peopel: new FormControl('', [Validators.required]),
      cardholder: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
      staying: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  ngOnInit(): void {
  }

  onResetForm() {
    this.reservasForm.reset();
  }

  onSaveForm() {
    if (this.reservasForm.valid) {
      this.dbData.saveReservas(this.reservasForm.value);
      // Sweet Alert
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'We have registered your reservation.',
        showConfirmButton: false,
        timer: 2000
      })
      // Sweet Alert
      this.onResetForm();
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Oops...',
        text: 'All fields are required check that they are well written.',
      })
    }
  }

}
