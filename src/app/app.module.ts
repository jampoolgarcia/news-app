// core modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// root component
import { AppComponent } from './app.component';

//  components
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListNewsComponent } from './components/list-news/list-news.component';
import { NewsArticleComponent } from './components/list-news/news-article/news-article.component';
import { FormSearchNewsComponent } from './components/form-search-news/form-search-news.component';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListNewsComponent,
    NewsArticleComponent,
    FormSearchNewsComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
