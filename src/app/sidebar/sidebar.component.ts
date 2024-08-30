import { Component, inject, OnInit } from '@angular/core';
import { SidebarService } from '../Services/sidebar.service';
import { User } from '../Model/User';
import { Subscription } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  isSidebarHidden: boolean=false;
  authService: AuthService = inject(AuthService)
  isLoggedIn: boolean=false;  
  private userSubject!: Subscription;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(){
    this.sidebarService .sidebarVisibility$.subscribe(isHidden=>{
      this.isSidebarHidden=isHidden;
    });
    this.userSubject = this.authService.user.subscribe((user: User)=>{
      this.isLoggedIn = user ? true : false;
    });
  }

}
