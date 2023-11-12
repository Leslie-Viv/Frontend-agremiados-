import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss'],
})
export class LoginAdminComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  user(){
    this.router.navigate(["./auth/login"]);
}

}
