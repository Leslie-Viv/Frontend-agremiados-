import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-convenios',
  templateUrl: './convenios.component.html',
  styleUrls: ['./convenios.component.scss'],
})
export class ConveniosComponent  implements OnInit {

  constructor(private router: Router,) { }

    ngOnInit(): void {
    }

    logout() {
      this.router.navigate(['/login']);
    }

}
