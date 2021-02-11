import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


// Servicios
import { DataApiService } from '../../../services/data-api.service';

// Interface
import { AltasI } from '../../../models/altas.interface';


@Component({
  selector: 'app-tablatours',
  templateUrl: './tablatours.component.html',
  styleUrls: ['./tablatours.component.css']
})
export class TablatoursComponent implements OnInit {

  constructor(public dataApi: DataApiService) {}

  public tours = [];
  public tour = '';


  ngOnInit(): void {
    this.dataApi.getAllTours()
      .subscribe( tours => {
        this.tours = tours;
      });
  }

  onDeletTour(idTour): void {
    const confirmation = confirm('Are you sure?');
    if (confirmation) {
      this.dataApi.deleteTour(idTour);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been deleted',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  // Traer los datos

  onPreUpdateTour(tour: AltasI) {
    this.dataApi.selectTour = Object.assign({}, tour);
  }


}
