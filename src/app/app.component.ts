import { Component } from '@angular/core';
import { mock_video_list } from './video/mock_video_item';
import { VideoItemModel } from './video/video_item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'YouTube-app';
  videos: VideoItemModel [] = [];

  constructor(){
    for (var video in mock_video_list){
      console.log(video);
        this.videos.push(video);
    }
  }
}
