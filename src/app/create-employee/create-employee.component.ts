import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  employee : Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private router: Router) {}

  ngOnInit(): void {}

  // method subscribe can process a synchronous response
  // Instead of passing separate callback arguments, use an observer argument. 
  // Signatures taking separate callback arguments will be removed in v8. Details: https://rxjs.dev/deprecations/subscribe-arguments
  // saveEmployee() {
  //   this.employeeService.createEmployee(this.employee).subscribe(data => { 
      
  //     console.log(data)
  //   },
  //   error => console.log(error));
    
  // }

   saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe({ 
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => this.goToEmployeeList() // if success navigate to employee list page
      // complete: () => console.info('complete')
    });
  }

  // navigate data from create employee to employee list page
  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }

}
