import { Component, OnInit } from '@angular/core';
import { FaqsApiService } from '../../../services/faqs-api.service';
import { 
  Router,
  NavigationEnd
} from '@angular/router';

declare var ga: Function;

@Component({
  selector: 'app-faqcontent',
  templateUrl: './faqcontent.component.html',
  styleUrls: ['./faqcontent.component.css']
})
export class FaqcontentComponent implements OnInit {

  constructor(private dataApi: FaqsApiService,
              private router: Router) {
    window.scroll(0, 0);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          ga('set', 'page', event.urlAfterRedirects);
          ga('send', 'pageview');
      }
    });
  }

  public faqs = [];

  ngOnInit(): void {
    this.dataApi.getAllFaqs()
      .subscribe( faqs => {
        this.faqs = faqs;
      });
  }

}
