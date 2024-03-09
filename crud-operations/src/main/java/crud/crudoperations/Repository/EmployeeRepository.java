package crud.crudoperations.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import crud.crudoperations.Model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Integer> {
	 List<Employee> findByFirstName(String firstName);
}
