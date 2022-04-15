import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleNewsComponent } from './single-news/single-news.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [SingleNewsComponent, NavBarComponent],
  imports: [CommonModule],
  exports: [SingleNewsComponent, NavBarComponent],
})
export class ComponentsModule {}
