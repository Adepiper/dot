import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { News } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-susbscribed-news',
  templateUrl: './susbscribed-news.component.html',
  styleUrls: ['./susbscribed-news.component.scss'],
})
export class SusbscribedNewsComponent implements OnInit, OnDestroy {
  susbcribed$ = new Subscription();
  subscribedNews: News[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.subscribetoNewsService();
  }

  subscribetoNewsService() {
    this.susbcribed$ = this.newsService.susbcribedNews$.subscribe((data) => {
      this.subscribedNews = data;
    });
  }
  ngOnDestroy(): void {
    this.susbcribed$.unsubscribe();
  }
}
