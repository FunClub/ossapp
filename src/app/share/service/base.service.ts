import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultViewModel } from '../model/result-view.model';

@Injectable()
export class BaseService {

  constructor(protected http:HttpClient) {

  }

  protected get(url:string):Observable<ResultViewModel>{
      return this.http.get<ResultViewModel>(url);
  }
  protected post(url:string,body):Observable<ResultViewModel>{
    return this.http.post<ResultViewModel>(url,body);
}

}
