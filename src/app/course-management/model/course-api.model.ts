import { PageRequestModel } from './../../share/model/page-request.model';
const PREFIX = "course/";
export class CourseApiModel {
    COURSE:string = PREFIX;
    QUERY_COURSE(condition:PageRequestModel){
        return `${condition.index}/${condition.size}`
    }
}
