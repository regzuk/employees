import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Employee } from './employee';

import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class EmployeeService {

  url = 'api/employees';
  getEmployees (): Observable<Employee[]> {
      return this.http.get<Employee[]>(this.url);
  };

  constructor(private http: HttpClient) { }

}
