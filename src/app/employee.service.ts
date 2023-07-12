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

  getEmployeesList(): Observable<Employee[]>{
    // return this.httpClient.get<Employee[]>(`${this.baseURL}`)

    return this.httpClient.get<Employee[]>(this.baseURL) // new update on Angular CLI 16
  }
}
