import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListNewsComponent } from './components/list-news/list-news.component';
import { NewsArticleComponent } from './components/list-news/news-article/news-article.component';
import { FormSearchNewsComponent } from './components/form-search-news/form-search-news.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListNewsComponent,
    NewsArticleComponent,
    FormSearchNewsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
