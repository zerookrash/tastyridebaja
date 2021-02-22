import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Params
} from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';

// Servicios
import { DataApiService } from '../../../services/data-api.service';

// Sweet Alert
import Swal from 'sweetalert2';

import { AltasI } from '../../../models/altas.interface';

import { 
  Router,
  NavigationEnd
} from '@angular/router';

declare var ga: Function;

@Component({
  selector: 'app-detalle-tour-component',
  templateUrl: './detalle-tour-component.component.html',
  styleUrls: ['./detalle-tour-component.component.css']
})
export class DetalleTourComponentComponent implements OnInit {

  constructor(
    private dataApi: DataApiService,
    private router: ActivatedRoute,
    private dbData: DataApiService,
    private route: Router
  ) { 
    window.scroll(0, 0);
    this.reservasForm = this.createFormGroup();

    this.route.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          ga('set', 'page', event.urlAfterRedirects);
          ga('send', 'pageview');
      }
    });
  }

  public tour: AltasI;
  emailPattern: any = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;a

   reservasForm: FormGroup;

  createFormGroup() {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      adult: new FormControl('', [Validators.required]),
      childrens: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
      date: new FormControl('', [Validators.required]),
      pickUp: new FormControl('', [Validators.required]),
      transport: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
    const idTour = this.router.snapshot.params['id'];
    this.getDetalles(idTour);
  }

  getDetalles(idTour: string): void {
    this.dataApi.getOneTour(idTour).subscribe( tour => {
      this.tour = tour;
    });
  }

  onResetForm() {
    this.reservasForm.reset();
  }

  onSaveForm() {
    console.log(this.reservasForm.value);
    if (this.reservasForm.valid) {
      this.reservasForm.value.title = this.tour.title;
      this.dbData.saveReservas(this.reservasForm.value);
      // Sweet Alert
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'We received your inquiry, someone will contact you shortly..',
        showConfirmButton: false,
        timer: 4000
      })
      // Sweet Alert
      this.onResetForm();
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Oops...',
        text: 'All fields are required except for the number of children. Please check the other fields.',
      })
    }
  }

}
