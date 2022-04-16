import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/models/news.model';

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.scss'],
  providers: [DatePipe],
})
export class SingleNewsComponent implements OnInit {
  @Input() news: News[] = [];

  constructor() {}

  ngOnInit(): void {}
}
