import { Component, OnInit } from '@angular/core';
import { FaqsApiService } from '../../../services/faqs-api.service';


@Component({
  selector: 'app-faqcontent',
  templateUrl: './faqcontent.component.html',
  styleUrls: ['./faqcontent.component.css']
})
export class FaqcontentComponent implements OnInit {

  constructor(private dataApi: FaqsApiService) {
    window.scroll(0, 0);
  }

  public faqs = [];

  ngOnInit(): void {
    this.dataApi.getAllFaqs()
      .subscribe( faqs => {
        this.faqs = faqs;
      });
  }

}
