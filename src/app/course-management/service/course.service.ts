import { PageRequestModel } from './../../share/model/page-request.model';
import { CourseApiModel } from './../model/course-api.model';
import { CourseModel } from './../model/course.model';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './../../share/service/base.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CourseService extends BaseService {

    constructor(protected http: HttpClient,private api:CourseApiModel) {
        super(http);
    }

    insertCourse(course:CourseModel){
        return this.post(this.api.COURSE,course);
    }
    selectAllCourse(){
        return this.get(this.api.COURSE).map(res=>res.data);
    }

}