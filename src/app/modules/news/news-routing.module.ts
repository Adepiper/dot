import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllNewsComponent } from './all-news/all-news.component';
import { NewsComponent } from './news.component';
import { SusbscribedNewsComponent } from './susbscribed-news/susbscribed-news.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
    children: [
      { path: '', component: AllNewsComponent },
      { path: 'subscribed', component: SusbscribedNewsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
