import { Component, OnInit } from '@angular/core';
import { VideoItemModel } from '../video/video_item.model';

@Component({
  selector: 'fm-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addVideo(video:VideoItemModel){
    console.log("You clicked add product");
    console.log(video);

  }

}
