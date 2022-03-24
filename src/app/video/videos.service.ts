import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
// import { strictEqual } from "assert";
import { VideoItemModel } from "./video_item.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable (
  {providedIn: 'root'}
)

export class VideoService {
    private baseUrl: string = "https://app-9143d-default-rtdb.firebaseio.com/";
    private videosEndPoint: string = "videos.json";

    constructor(private http:HttpClient){

    }

    getVideos() {
        return this.http.get<VideoItemModel []>(this.baseUrl + this.videosEndPoint);
    }

    getVideo(index:number){
        return this.http.get<VideoItemModel>(this.baseUrl + 'videos' + '/' + index + '.json');
    }

    addVideo(video:VideoItemModel){
        this.db.list<VideoItemModel>("videos").push(video);
    }
}