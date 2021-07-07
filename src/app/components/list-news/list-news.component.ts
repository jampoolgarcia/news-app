import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styles: [
  ]
})
export class ListNewsComponent implements OnInit {

  public listNews: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
