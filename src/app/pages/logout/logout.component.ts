import { Component, OnInit } from '@angular/core';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private fireauth: FirebaseauthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.fireauth.logout();
    this.router.navigate(['/public']);
  }

}
