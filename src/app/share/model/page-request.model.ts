export class PageRequestModel {
    index:number;
    size:number;
    sortBy:string;
    constructor(){
        this.index=0;
        this.size=10;
    }
}
export class PagedData {
    totalElements:number;
    content:any;
}