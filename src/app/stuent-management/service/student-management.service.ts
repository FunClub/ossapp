
import { HttpClient } from '@angular/common/http';
import { BaseService } from './../../share/service/base.service';
import { Injectable } from '@angular/core';
import { StudentManagementApiModel } from '../model/student-management-api.model';
import { StudentQueryModel } from '../model/student-query.model';
import { UserModel } from '../../share/model/user.model';

@Injectable()
export class StudentManagementService extends BaseService{

    constructor(protected http:HttpClient,private api:StudentManagementApiModel) {
        super(http);
    }

    selectStudents(query:StudentQueryModel){
        return this.post(this.api.STUDENTS,query);
    }

    updateStudent(user:UserModel){
        return this.put(this.api.STUDENT,user);
    }
}