import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Params
} from '@angular/router';

import { DataApiService } from '../../../services/data-api.service';
import { AltasI } from '../../../models/altas.interface';

@Component({
  selector: 'app-detalle-tour-component',
  templateUrl: './detalle-tour-component.component.html',
  styleUrls: ['./detalle-tour-component.component.css']
})
export class DetalleTourComponentComponent implements OnInit {

  constructor(
    private dataApi: DataApiService,
    private router: ActivatedRoute
  ) { 
    window.scroll(0, 0);
  }

  public tour: AltasI;

  ngOnInit() {
    const idTour = this.router.snapshot.params['id'];
    this.getDetalles(idTour);
  }

  getDetalles(idTour: string): void {
    this.dataApi.getOneTour(idTour).subscribe( tour => {
      this.tour = tour;
    });
  }

}
