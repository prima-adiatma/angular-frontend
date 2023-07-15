import { Component } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  id: any
  employee: Employee = new Employee;
  constructor(private route: ActivatedRoute,
    private employeeService: EmployeeService){}

  ngOnInit(): void{
    this.id = this.route.snapshot.params['id']
    // this.employeeService.getEmployeeById(this.id).subscribe(data => {
    //   this.employee = data;
    // })
    this.employeeService.getEmployeeById(this.id).subscribe({
      next: (data) => { console.log(data), this.employee = data},
      error: (error) => console.log(error),
      complete: () => console.log("Data init completed!")
      
    })
  }

}
