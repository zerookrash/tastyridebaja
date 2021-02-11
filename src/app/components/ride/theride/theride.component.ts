import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-theride',
  templateUrl: './theride.component.html',
  styleUrls: ['./theride.component.css']
})

export class TherideComponent implements OnInit {

  constructor( ) { 
    window.scroll(0, 0);
  }

  ngOnInit(): void {}

}
