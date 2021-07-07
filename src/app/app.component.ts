import { Component } from '@angular/core';
import { NewsService } from './services/news.service';
import { NewsArticleI } from './shared/model/newsArticle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  
  public title = 'News Search Engine';
  public listNewsArticle: NewsArticleI[] = [];

  constructor(private _service: NewsService){

  }

  getNews(body: { category: string, country: string}){
    const {category, country} = body;
    this._service.getFilteredNews(country, category)
        .subscribe(res => {
          console.log(res);
        }, err => {
          console.log(err);
        })
  }
}
