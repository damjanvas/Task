import { Component, OnInit } from '@angular/core';
import { MockService } from 'src/app/services/mock.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getData();  
  }

  getData() {
    this.route.data.subscribe(data => {    
      this.news = data.news.news;
    });
  }
}
