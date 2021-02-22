import { Component, OnInit } from '@angular/core';
import { 
  Router,
  NavigationEnd
} from '@angular/router';

declare var ga: Function;

@Component({
  selector: 'app-theride',
  templateUrl: './theride.component.html',
  styleUrls: ['./theride.component.css']
})

export class TherideComponent implements OnInit {

  constructor( private router: Router ) { 
    window.scroll(0, 0);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          ga('set', 'page', event.urlAfterRedirects);
          ga('send', 'pageview');
      }
    });
  }

  ngOnInit(): void {}

}
