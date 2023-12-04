import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss'],
})
export class HomeAdminComponent  implements OnInit {

  constructor(private authS: AuthService, private router: Router) { }

  ngOnInit() {}

  logout(){
    this.authS.logout();
    console.log('¡Sesión cerrada exitosamente!');
    this.router.navigate(['/login']);
  }

}
