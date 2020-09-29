import { Login } from './../login';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { AlertServiceService } from '../alert-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../employee';
import { CanShowService } from '../can-show.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login = new Login();
  loading = false;
  loginForm: FormGroup;
  submitted = false;
  localstorege: any;
  constructor(private route: ActivatedRoute, private router: Router,
    private employeeService: EmployeeService, private alertService: AlertServiceService,
    private formBuilder: FormBuilder,private canShowService:CanShowService) {
    }
    
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userId: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    // this.f.employee.value
    this.employeeService.isPresent(this.f.email.value, this.f.userId.value)
      .subscribe(data => {
        this.login = data;
        if (this.login.status == "Y") {
          this.router.navigate(['employees']);
          localStorage.setItem('canShow', 'true');
          this.canShowService.setcanShow('true');
        } else {
          console.log(this.login.message)
          this.alertService.error(this.login.message);
          this.loading = false;
        }
      }, error => console.log(error));
  }

}
