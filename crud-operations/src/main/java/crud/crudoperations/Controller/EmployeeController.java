package crud.crudoperations.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import crud.crudoperations.Exception.ResourceNotFoundException;
import crud.crudoperations.Model.Employee;
import crud.crudoperations.Repository.EmployeeRepository;

@RestController
@RequestMapping("Employee")
@CrossOrigin
public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;
	@GetMapping("data")
	public List<Employee> save()
	{
		return employeeRepository.findAll();
	}
	@PostMapping("datapost")
	public Employee post(@RequestBody Employee employee)
	{
		return employeeRepository.save(employee);
	}
	 @GetMapping("data/{id}")
	    public ResponseEntity<Employee> getEmployeesByFirstName(@PathVariable Integer id) {
	     // System.out.println("notfound");
		 Employee employee=employeeRepository.findById(id)
				 .orElseThrow(()->new ResourceNotFoundException("particular employee is not found with id"+" "+id));
		 return ResponseEntity.ok(employee);
	    }
	 @PutMapping("/update/{id}")
	 public ResponseEntity<Employee> updateEmployee(@PathVariable Integer id, @RequestBody Employee employeedetails) {
		 System.out.println("update");
	     Employee employees = employeeRepository.findById(id).
	    		 orElseThrow(()->new ResourceNotFoundException("particular employee is not found with id"+" "+id));
	     employees.setFirstName(employeedetails.getFirstName());
	     employees.setLastName(employeedetails.getLastName());
	     employees.setEmailId(employeedetails.getEmailId());
	     Employee updateemployee=employeeRepository.save(employees);
	     return ResponseEntity.ok(employees);
	 }
	 
	 @DeleteMapping("/delete/{id}")
	 public ResponseEntity<Map<String,Boolean>> DeleteById(@PathVariable Integer id)
	 {
	     Employee employees = employeeRepository.findById(id).
	    		 orElseThrow(()->new ResourceNotFoundException("particular employee is not found with id"+" "+id));
	     employeeRepository.delete(employees);
	     Map<String,Boolean> resonse=new HashMap<>();
	  resonse.put("deleted", Boolean.TRUE);
	  return ResponseEntity.ok(resonse);
		 
	 }

}
