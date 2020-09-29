package com.example.demo.controller;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;



@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
	
	@Query("select u from Employee u where u.emailId = ?1 and u.id = ?2")
	Employee findByEmailAddress(String emailAddress,long id);
}