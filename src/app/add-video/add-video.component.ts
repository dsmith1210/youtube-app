import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video/videos.service';
import { VideoItemModel } from '../video/video_item.model';

@Component({
  selector: 'fm-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {

  constructor(private vs:VideoService) { }

  ngOnInit(): void {
  }

  addVideo(video:VideoItemModel){
    console.log("You clicked add product");
    console.log(video);
    this.vs.addVideo(video);
  }

}
