import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"; // new import
import { Observable } from "rxjs";
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employees";

  constructor(private httpClient : HttpClient) { // new import

  }


// REST API CALL
  getEmployeesList(): Observable<Employee[]>{
    // return this.httpClient.get<Employee[]>(`${this.baseURL}`)
    return this.httpClient.get<Employee[]>(this.baseURL)
  }

  // createEmployee(employee: Employee): Observable<any> // use any if don't know the response of the http
  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
    // return this.httpClient.post(this.baseURL, employee);
  }

  getEmployeeById(id: Employee): Observable<Employee> {
    // return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
    return this.httpClient.get<Employee>(this.baseURL + '/' + id);
  }

 

}
