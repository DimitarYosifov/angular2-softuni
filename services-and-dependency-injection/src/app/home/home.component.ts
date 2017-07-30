import { Component, OnInit } from '@angular/core';
import { HomeData } from './home.data';

@Component({
  selector: 'home',
  providers: [HomeData],
  template: `
  <h1>Welcome to Michaela's github profile</h1>
  `,
  //   templateUrl: './home/home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  // articles;
  constructor(
    private homeData: HomeData,
  ) {
  }
  ngOnInit() {
    // this.articles = this.homeData.getData()
  }
}
