import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { newsId } from '../helper/generateId';
import { News, NewsResponse } from '../models/news.model';
import { ReportingService } from './reporting.service';

const api = environment.api;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  news$ = new BehaviorSubject<News[]>([]);
  susbcribedNews$ = new BehaviorSubject<News[]>([]);
  loading = new BehaviorSubject(false);
  page = 1;

  subscribeToNews(news: News) {
    const subscribedNews = [...this.susbcribedNews$.value];
    const findNews = subscribedNews.find((value) => value.id === news?.id);
    if (findNews) {
      const splicedNews = subscribedNews.filter(
        (value) => value.id !== findNews.id
      );
      this.susbcribedNews$.next(splicedNews);
    } else {
      subscribedNews.push(news);
      this.susbcribedNews$.next(subscribedNews);
    }
  }

  getNews(
    apiEndPoint: string,
    page: number,
    pageSize: number,
    search?: string,
    country?: string,
    category?: string
  ) {
    let params = new HttpParams();

    params = params.set('page', `${this.page}`);
    params = params.set('pageSize', `${pageSize}`);
    params = params.set('apiKey', `${apiKey}`);

    if (country) {
      params = params.set('country', country);
    }
    if (category) {
      params = params.set('category', category);
    }
    if (search) {
      params = params.set('q', search);
    }

    this.loading.next(true);

    this.http.get<NewsResponse>(`${api}/${apiEndPoint}`, { params }).subscribe(
      (data) => {
        this.loading.next(false);
        const articles = data.articles.map((value) => ({
          ...value,
          subscribed: false,
          id: newsId(),
        }));
        const news = [...this.news$.value, ...articles];

        this.news$.next(news);
        this.page++;
      },
      (err: any) => {
        this.loading.next(false);
        this.reportingService.apiErrorService(err);
      }
    );
  }

  constructor(
    private http: HttpClient,
    private reportingService: ReportingService
  ) {}
}
