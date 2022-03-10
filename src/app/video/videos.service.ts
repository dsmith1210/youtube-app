import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
// import { strictEqual } from "assert";
import { VideoItemModel } from "./video_item.model";

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
}