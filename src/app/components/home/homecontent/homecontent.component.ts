import { Component, OnInit } from '@angular/core';
import { 
  Router,
  NavigationEnd
} from '@angular/router';

declare var ga: Function;

@Component({
  selector: 'app-homecontent',
  templateUrl: './homecontent.component.html',
  styleUrls: ['./homecontent.component.css']
})
export class HomecontentComponent  {

  constructor( private router: Router ) {
    window.scroll(0, 0);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          ga('set', 'page', event.urlAfterRedirects);
          ga('send', 'pageview');
      }
    });
  }
  


}
