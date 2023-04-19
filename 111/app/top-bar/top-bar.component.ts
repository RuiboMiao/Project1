import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent implements OnInit {

  constructor(private authService: UserAuthService) {
  }

  ngOnInit() {
    this.authService.checkLogin();
  }

  checkLoggedIn() {
    return this.authService.isLoggedIn;
  }
}
