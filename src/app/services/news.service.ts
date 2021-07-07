import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const URL_BASE = environment.url_base;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _http: HttpClient) { }

  getFilteredNews(country: string, category: string): Observable<any> {
    return this._http.get(`${URL_BASE}?country=${country}&category=${category}&apiKey=${API_KEY}`);
  }
}
