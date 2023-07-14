import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"; // new import
import { FormsModule } from '@angular/forms'; // new import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component'; // new component
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component'; // new component

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent, // new component
    CreateEmployeeComponent, UpdateEmployeeComponent // new component
  ],
  // this is import array
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // new import
    FormsModule // new import
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
