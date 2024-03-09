import { Component } from '@angular/core';
import { Employee } from '../employee-list/employee-list.component';
import { EmployeeServiceService } from '../employee-service.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {
 emp :Employee = new Employee();
  constructor(private employeeservice : EmployeeServiceService,
    private router:Router)
  {

  }
  onSubmit() {
    console.log(this.emp); 
    this.saveEmployee();
    this.goToEmployeeList();
  
  }
saveEmployee(){
  this.employeeservice.createEmployee(this.emp).subscribe (data=>{
    console.log(data);
    
  },
  error=>console.log(error));
}
goToEmployeeList(){
  this.router.navigate(['/employees']);
}

}
