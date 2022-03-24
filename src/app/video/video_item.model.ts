export class VideoItemModel {
    img: string;
    viewcountlow: string;
    owner: string;
    date: string;
    title: string;
 
    constructor(img: string, viewcountlow: string, owner: string, date: string, title: string){
        this.img = img;
        this.viewcountlow = viewcountlow;
        this.owner = owner;
        this.date = date;
        this.title = title;
    }
}