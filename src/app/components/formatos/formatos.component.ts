import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formatos',
  templateUrl: './formatos.component.html',
  styleUrls: ['./formatos.component.scss'],
})
export class FormatosComponent  implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {}

  logout() {
    this.router.navigate(['/login']);
  }

}
