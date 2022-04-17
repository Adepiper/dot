import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleNewsComponent } from './single-news/single-news.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    SingleNewsComponent,
    NavBarComponent,
    EmptyStateComponent,
    LoaderComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    SingleNewsComponent,
    NavBarComponent,
    EmptyStateComponent,
    LoaderComponent,
  ],
})
export class ComponentsModule {}
