import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee-list/employee-list.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  private baseUrL = "http://localhost:9090/Employee/data"
  constructor(private http: HttpClient) {
  }
  getEmployeeList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrL}`)
  }

  createEmployee(employee: Employee) {
    return this.http.post(`${"http://localhost:9090/Employee/datapost"}`, employee)
  }
  getEmployeeByid(id: any): Observable<Employee> {
    return this.http.get<Employee>(`${"http://localhost:9090/Employee/data"}/${id}`);
  }
  updateEmployee(id: any, updatedEmployee: Employee): Observable<Employee> {
    const url = `${"http://localhost:9090/Employee/update"}/${id}`; // Assuming your API endpoint for updating employee is like /employees/:id
    return this.http.put<Employee>(url, updatedEmployee);
  }
  DeleteEmployeeById(id: any): Observable<Employee> {
    return this.http.delete<Employee>(`${"http://localhost:9090/Employee/delete"}/${id}`);
  }
}
