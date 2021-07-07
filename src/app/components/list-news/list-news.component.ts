import { Component, Input, OnInit } from '@angular/core';
import { NewsArticleI } from 'src/app/shared/model/newsArticle';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styles: [
  ]
})
export class ListNewsComponent {

  @Input() listNewsArticle!: NewsArticleI[];
  @Input() isLoading!: boolean;

  constructor() { }

}
