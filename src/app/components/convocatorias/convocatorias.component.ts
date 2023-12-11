import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-convocatorias',
  templateUrl: './convocatorias.component.html',
  styleUrls: ['./convocatorias.component.scss'],
})
export class ConvocatoriasComponent  implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigate(['/login']);
  }
}