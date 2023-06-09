import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  
  constructor(private router: Router, private authService: UserAuthService) {
    this.authService.logout(); 
  }

  ngOnInit() {
    this.authService.logout();
  }

  login() {
    this.router.navigate(['/login']);
  }
}
