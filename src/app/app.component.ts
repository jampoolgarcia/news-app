import { Component } from '@angular/core';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  
  public title = 'News Search Engine';
  public listNews = [];

  constructor(private _service: NewsService){

  }

  getNews(body: { category: string, country: string}){
    console.log(body);
  }
}
