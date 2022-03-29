import { Injectable } from "@angular/core";
// import { strictEqual } from "assert";
import { VideoItemModel } from "./video_item.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable (
  {providedIn: 'root'}
)

export class VideoService {

    constructor(private db:AngularFireDatabase){

    }

    public getVideos() {
        return this.db.list<VideoItemModel>("videos").valueChanges();
    }

    public getVideo(index:number){
        return this.db.list("videos", ref => ref.orderByChild("date").startAt(10)).valueChanges();
    }

    public addVideo(video:VideoItemModel){
    }
}