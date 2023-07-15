import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent{

  employees!: Employee[];

  constructor(private employeeService: EmployeeService,
    private router: Router) {}

  ngOnInit(): void {
    // data dummy to ????
    // this.employees = [
    //     {
    //     "id": 1,
    //     "firstName": "Prima",
    //     "lastName": "Adiatma",
    //     "emailId": "prima.adiatma90@gmai.com"
    //   },
    //   {
    //     "id": 1,
    //     "firstName": "Tony",
    //     "lastName": "Stark",
    //     "emailId": "tony@gmail.com"
    //   }];

    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee', id])
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe({
      next: (data) => { console.log(data), this.getEmployees() },
      error: (error) => console.log(error),
      complete: () => console.log("Data init completed!")
    });
  }

  employeeDetails(id: number) {
    this.router.navigate(['employee-details', id])
  }

}
