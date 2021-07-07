import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListNewsComponent } from './components/list-news/list-news.component';
import { NewsArticleComponent } from './components/list-news/news-article/news-article.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListNewsComponent,
    NewsArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
