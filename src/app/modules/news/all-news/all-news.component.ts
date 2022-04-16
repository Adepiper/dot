import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { News } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss'],
  providers: [DatePipe],
})
export class AllNewsComponent implements OnInit, OnDestroy {
  pageSize = 12;
  page = 1;
  news$ = new Subscription();
  news: News[] = [];
  loading = false;
  loading$ = new Subscription();
  constructor(private newsService: NewsService) {}

  subscribetoNewsService() {
    this.news$ = this.newsService.news$.subscribe((data) => {
      this.news = data;
    });

    this.loading$ = this.newsService.loading.subscribe((value) => {
      this.loading = value;
    });
  }

  ngOnInit(): void {
    this.subscribetoNewsService();
    if (this.news.length === 0) {
      this.newsService.getNews(
        'everything',
        this.page,
        this.pageSize,
        'bitcoin'
      );
    }
  }

  ngOnDestroy(): void {
    this.news$.unsubscribe();
    this.loading$.unsubscribe();
  }
}
