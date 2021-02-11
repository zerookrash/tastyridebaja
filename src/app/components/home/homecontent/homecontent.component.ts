import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homecontent',
  templateUrl: './homecontent.component.html',
  styleUrls: ['./homecontent.component.css']
})
export class HomecontentComponent implements OnInit {

  constructor() {
    window.scroll(0, 0);
  }
  ngOnInit(): void {
  }


}
