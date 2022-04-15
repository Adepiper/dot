import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { SusbscribedNewsComponent } from './susbscribed-news/susbscribed-news.component';


@NgModule({
  declarations: [
    NewsComponent,
    SusbscribedNewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
