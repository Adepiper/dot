import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { NewsService } from './news.service';

@Injectable({
  providedIn: 'root',
})
export class InfiniteScrollingService {
  intersectionSubject = new BehaviorSubject(false);

  public intersectionOptions = {
    root: null, //implies the root is the document viewport
    rootMargin: '0px',
    threshold: [0, 0.5, 1],
  };

  getObservable() {
    return this.intersectionSubject.asObservable();
  }

  private observer: any = new IntersectionObserver(
    this.intersectionCallback.bind(this),
    this.intersectionOptions
  );
  intersectionCallback(entries: any, observer: any) {
    entries.forEach((entry: any) => {
      entry.intersectionRatio === 1
        ? this.intersectionSubject.next(true)
        : this.intersectionSubject.next(false);
    });
  }

  susbcribeToInfiniteScroll(callback: any, subscription: Subscription) {
    subscription = this.getObservable().subscribe((status) => {
      if (status) {
        this.newsService.getNews('everything', 1, 12, 'bitcoin');
      }
    });
  }

  setInfiniteScrollTarget(domId: string) {
    let clearTimer = setInterval(() => {
      let target = document.querySelector(`#${domId}`);
      if (target) {
        clearInterval(clearTimer);
        this.setObserver().observe(target);
      }
    }, 5000);
  }

  setObserver() {
    return this.observer;
  }

  constructor(private newsService: NewsService) {}
}
