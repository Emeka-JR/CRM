import { Component, inject, OnInit } from '@angular/core';
import { SidebarService } from './Services/sidebar.service';
import { AuthService } from './Services/auth.service';
import { Subscription } from 'rxjs';
import { User } from './Model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isSidebarHidden = true;
  authService: AuthService = inject(AuthService)
  isLoggedIn: boolean=false;  
  private userSubject!: Subscription;


  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarService.sidebarVisibility$.subscribe(isHidden => {
      this.isSidebarHidden = isHidden;
    });
    this.userSubject = this.authService.user.subscribe((user: User)=>{
      this.isLoggedIn = user ? true : false;
    });
  }
}
