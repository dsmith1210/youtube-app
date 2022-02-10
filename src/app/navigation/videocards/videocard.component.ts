import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-videocards',
  templateUrl: 'videocards.component.html',
  styleUrls: ['videocards.component.css']
})
export class VideoCardsComponent {
  @Input()
  img: string;
  viewcountlow: string; 
  viewcountmid: string;
  viewcounthigh: string; 
  owner: string;
  date: string;
  title: string;

  constructor() {
    this.img = "";
    this.viewcountlow = "34K";
    this.viewcountmid = "368K";
    this.viewcounthigh = "3.2M";
    this.owner = "Science Daily";
    this.date = "";
    this.title = "";
  }

}