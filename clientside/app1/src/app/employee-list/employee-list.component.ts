import { Component } from "@angular/core";
import { EmployeeServiceService } from "../employee-service.service";
import { Router } from "@angular/router";


export class Employee {
  id: any;
  firstName:any;
  lastName: any;
  emailId: any;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'] // Corrected property name
})
export class EmployeeListComponent  {
  // Define an array of type Employee
  employee : Employee[]=[]; // Corrected type declaration
 emp:Employee=new Employee();
  constructor(private employeeservice:EmployeeServiceService,
    private ro : Router)
  {
    
  this.employee=[];
  }

  ngOnInit():void{
   
    this.getEmployees();
  }

private getEmployees(){
  this.employeeservice.getEmployeeList().subscribe(data =>{
    this.employee=data; 
  });
}
updateEmployee(id:any){
  this.ro.navigate(['update-employee',id]);
}
EmployeeDetails(id:any)
{
  this.ro.navigate(['Employee-details',id]);
}
DeleteEmployee(id:any){
this.employeeservice.DeleteEmployeeById(id).subscribe(data=>{
 console.log(data);
 this.getEmployees();
})
}
}