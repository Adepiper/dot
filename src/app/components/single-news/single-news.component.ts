import { DatePipe } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { News } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.scss'],
  providers: [DatePipe],
})
export class SingleNewsComponent implements OnInit, OnDestroy {
  @Input() news: News[] = [];
  subcribedNews$ = new Subscription();
  subscribedNews: News[] = [];

  constructor(private newsService: NewsService) {}

  toggleSubscribe(news: News) {
    this.newsService.subscribeToNews(news);
  }

  susbscribeToNewsService() {
    this.subcribedNews$ = this.newsService.susbcribedNews$.subscribe(
      (value) => {
        this.subscribedNews = value;
      }
    );
  }

  isSusbcribed(id: string) {
    return this.subscribedNews.find((value) => value.id === id);
  }

  ngOnInit(): void {
    this.susbscribeToNewsService();
  }

  ngOnDestroy(): void {
    this.subcribedNews$.unsubscribe();
  }
}
