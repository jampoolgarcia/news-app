import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface ConuntryI {
  name: string;
  value: string;
}

@Component({
  selector: 'app-form-search-news',
  templateUrl: './form-search-news.component.html',
  styles: [
  ]
})
export class FormSearchNewsComponent implements OnInit {

  public selectCategory= '';
  public selectCountry= '';
  public categories: string[] = [];
  public countries: ConuntryI[] = [];

  @Output() formEmitter = new EventEmitter<{country: string, category: string}>(); 

  constructor() {
    this.defauldData();
   }

  ngOnInit(): void {
  }

  defauldData(){
    this.categories = [
      'general', 
      'technology', 
      'business',
      'enterteniment',
      'health',
      'sports',
      'science'
    ];

    this.countries = [
      {value: 'ar', name: 'Argentina'},
      {value: 've', name: 'Venezuela'},
      {value: 'co', name: 'Colombia'},
      {value: 'ch', name: 'Chile'},
      {value: 'br', name: 'Brasil'},
      {value: 'fr', name: 'Francia'},
      {value: 'hu', name: 'Hungria'},
      {value: 'mx', name: 'Mexico'},
      {value: 'gb', name: 'Reino Unido'},
    ]
  }

  onSubmit(){
    this.formEmitter.emit({
      country: this.selectCountry,
      category: this.selectCategory
    })
  }

}
