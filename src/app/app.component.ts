import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CanShowService } from './can-show.service';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularAndSpringBoot';
  isAuthToRead:boolean;
  public readonly destroy$: Subject<void> = new Subject<void>();
  ngOnInit(): void {
    this.canShowService.getcanShow()
    .pipe(takeUntil(this.destroy$))
    .subscribe((isTrue) => {
      this.isAuthToRead = (isTrue == 'true');
      console.log("changed===>"+isTrue);
    });
    let canShow = localStorage.getItem('canShow') || false;
    this.canShowService.setcanShow(canShow); 
  }
  constructor(private canShowService: CanShowService, private router:Router) {
  }

  logOut(){
    localStorage.setItem('canShow','false');
    this.canShowService.setcanShow(false); 
    this.router.navigate(['/']);
  }

}
