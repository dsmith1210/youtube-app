import { Component, OnInit } from '@angular/core';
import { mock_video_list } from "./mock_video_item";
import { VideoService } from './videos.service';
import { VideoItemModel } from "./video_item.model";

    @Component ({
        selector: 'yt-video1',
        templateUrl: 'card1-layout.component.html',
        styleUrls: ['card1-layout.component.css']
    })
    export class Video1Component implements OnInit {

        videos: VideoItemModel [] = [];

        constructor(private videoService:VideoService){
            for (var video of mock_video_list){
                console.log(video);
                this.videos.push(video);
            }
        }

        ngOnInit(): void {
            this.videoService.getVideos().subscribe((data: VideoItemModel []) => {
                console.log("Fetching videos");
                console.log(data);
            } );
            throw new Error('Method not implemented.');
        }
    } 