import { Component, Input, OnInit } from '@angular/core';
import { NewsArticleI } from 'src/app/shared/model/newsArticle';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styles: [`
    .bg-none {
      background-color: transparent !important;
    }

    .h-45 {
      height: 40% !important;
    }

  `]
})
export class NewsArticleComponent {

  @Input() article!: NewsArticleI;

  constructor() { }

}
