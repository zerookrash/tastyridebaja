import { Component, OnInit } from '@angular/core';
import { DataDbService } from '../../../services/data-db.service';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  constructor( private dbData: DataDbService ) {
    this.contactForm = this.createFormGroup();
  }

  emailPattern: any = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;a

  contactForm: FormGroup;

  createFormGroup() {
    return new FormGroup({
      name     : new FormControl('', [Validators.required, Validators.minLength(5)]),
      email    : new FormControl('', [Validators.required, Validators.minLength(5),Validators.pattern(this.emailPattern)]),
      message  : new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(300)])
    });
  }

  ngOnInit(): void {}

  onResetForm(){
    this.contactForm.reset();
  }

  onSaveForm() {
    if(this.contactForm.valid){
      this.dbData.saveMessage(this.contactForm.value);
      this.onResetForm();
      console.log('Valid');
    } else {
      console.log('No Valid');
    }
  }

  get name()    { return this.contactForm.get('name') ; }
  get email()   { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }

}
