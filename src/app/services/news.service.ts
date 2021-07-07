import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { NewsArticleI } from '../shared/model/newsArticle';

const URL_BASE = environment.url_base;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _http: HttpClient) { }

  getFilteredNews(country: string, category: string): Observable<any> {
    return this._http.get(`${URL_BASE}?country=${country}&category=${category}&apiKey=${API_KEY}`)
      .pipe(
        map((res: any) => this.parseArticlesNews(res))
      )
  }

  parseArticlesNews(data: any): NewsArticleI[] {
    let list: NewsArticleI[] = [];
    data.articles?.forEach((elem: any) => {
      list.push({
        urlToImage: elem.urlToImage,
        author: elem.source.name,
        title: elem.title,
        description: elem.description,
        url: elem.url
      })
    });
    return list;
  }
}
