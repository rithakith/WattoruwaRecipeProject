import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/authservice/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userEmail: string = '';
  userUID: string = '';

  constructor(private auth: AuthService, private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    // Subscribe to the authState observable to get user information
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userEmail = user.email || '';
        this.userUID = user.uid || '';
      }
    });
  }

  logout() {
    this.auth.logout(); // Call the logout method from your AuthService
  }
}
