import { Component, inject, OnInit } from '@angular/core';
import { SidebarService } from '../Services/sidebar.service';
import { AuthService } from '../Services/auth.service';
import { Subscription } from 'rxjs';
import { User } from '../Model/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  constructor(private sidebarService: SidebarService) { }
  authService: AuthService = inject(AuthService)
  isLoggedIn: boolean=false;  
  private userSubject!: Subscription;


  toggleSidebar(){
    this.sidebarService.toggleSidebar();
  }

  ngOnInit(): void {
    this.userSubject = this.authService.user.subscribe((user: User)=>{
      this.isLoggedIn = user ? true : false;
    });
  }
  
}
