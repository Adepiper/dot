import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { SusbscribedNewsComponent } from './susbscribed-news/susbscribed-news.component';
import { AllNewsComponent } from './all-news/all-news.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { SingleNewsComponent } from 'src/app/components/single-news/single-news.component';

@NgModule({
  declarations: [NewsComponent, SusbscribedNewsComponent, AllNewsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, NewsRoutingModule, ComponentsModule],
})
export class NewsModule {}
