import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee-list/employee-list.component';
import { error } from 'console';

import { EmployeeServiceService } from '../employee-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {
  employee : Employee[]=[];
 id:any;
  emp :Employee = new Employee();
  constructor(private employeeservice:EmployeeServiceService,
    private router : Router, private route: ActivatedRoute)
  {
    
  //this.employee
  }
  ngOnInit(): void {
this.id=this.route.snapshot.params['id'];
   this.employeeservice.getEmployeeByid(this.id).subscribe(data=>{
    console.log('Data:', data);
    this.emp=data;
   },error=>console.log(error)
   );
   
  }
  UpdateEmployee()
  {
    this.employeeservice.updateEmployee(this.id,this.emp)
    .subscribe(data=>{
      console.log(data);
      this.emp=new Employee();
      this.goToEmployeeList();
    },
    error=>console.log(error));
  }
  onSubmit() {
   this.UpdateEmployee();
  }
goToEmployeeList(){
  this.router.navigate(['/employees']);
}
}
