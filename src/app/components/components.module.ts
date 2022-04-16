import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleNewsComponent } from './single-news/single-news.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { EmptyStateComponent } from './empty-state/empty-state.component';

@NgModule({
  declarations: [SingleNewsComponent, NavBarComponent, EmptyStateComponent],
  imports: [CommonModule, RouterModule],
  exports: [SingleNewsComponent, NavBarComponent, EmptyStateComponent],
})
export class ComponentsModule {}
