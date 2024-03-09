import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
import { Employee } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent  implements OnInit{
  id:any;
 e!:Employee;
  constructor(private route:ActivatedRoute,
    private employeeservice:EmployeeServiceService)
  {

  }
  ngOnInit(): void {
     this.id=this.route.snapshot.params['id'];
this.e=new Employee();
this.employeeservice.getEmployeeByid(this.id).subscribe(
  data=>{
    this.e=data;
  }
);
  }

}
