// core modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// root component
import { AppComponent } from './app.component';

//  components
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ListNewsComponent } from './components/list-news/list-news.component';
import { NewsArticleComponent } from './components/list-news/news-article/news-article.component';
import { FormSearchNewsComponent } from './components/form-search-news/form-search-news.component';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';

// pipes 
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [
    // root 
    AppComponent,

    // components
    NavbarComponent,
    ListNewsComponent,
    NewsArticleComponent,
    FormSearchNewsComponent,
    SpinnerComponent,

    // pipes
    CapitalizePipe,
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
