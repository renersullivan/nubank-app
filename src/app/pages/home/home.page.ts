import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { StatusBar, Style } from '@capacitor/status-bar';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}

  navigate() {
    this.router.navigate(['/home']);
  }
}
