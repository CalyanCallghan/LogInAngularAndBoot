import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  submitted = false;
  submittedd = false;
  registerForm: FormGroup;

  constructor(private employeeService: EmployeeService,
    private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
    });
  }

  get f() { return this.registerForm.controls; }

  save() {
    this.employeeService
    .createEmployee(this.employee).subscribe(data => {
      console.log(data)
      this.employee = new Employee();
      this.gotoList();
    }, 
    error => console.log(error));
    
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.submittedd = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }
}
