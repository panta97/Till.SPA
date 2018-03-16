import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.model).subscribe(data => {
      console.log('logged in successfuly');
      this.router.navigate(['/caja']);

    }, error => {
      console.log('failed to login');
    });
  }

  loggedIn(): boolean {
    return this.auth.loggedIn();
  }

}
