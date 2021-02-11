import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {

  constructor( private dataApi: DataApiService ) {
    window.scroll(0, 0);
  }
  public tours = [];
  public tour = '';

  ngOnInit(): void {
    this.dataApi.getAllTours()
      .subscribe( tours => {
        this.tours = tours;
      });
  }

}
