import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {

  id: any;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id']
    this.employeeService.getEmployeeById(this.id).subscribe({
      next: (data) => { console.log(data), this.employee = data },
      error: (error) => console.log(error),
      complete: () => console.log("Data init completed!")
    })
  }

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
      next: (data) => console.log(data),
      error: (e) => console.error(e),
      complete: () => this.goToEmployeeList() // if success navigate to employee list page
      // complete: () => console.info('complete')
    });
  }

  // navigate data from update employee to employee list page
  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }

  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
  }

}
