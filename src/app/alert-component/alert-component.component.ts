import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertServiceService } from '../alert-service.service';

@Component({
  selector: 'alert',
  templateUrl: './alert-component.component.html',
  styleUrls: ['./alert-component.component.css']
})
export class AlertComponentComponent implements OnInit {
  private subscription: Subscription;
  message: any;

  constructor(private alertService: AlertServiceService) { }

  ngOnInit() {
      this.subscription = this.alertService.getMessage().subscribe(message => { 
          this.message = message; 
      });
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}
