import { Component, OnInit } from '@angular/core';
import { ActivationStart, Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { homeResponse } from 'src/app/model/home.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  resposta: homeResponse;

  constructor(private router: Router, private httpClient: HttpClient) {}

  hideValue: boolean = true;

  ngOnInit(): void {
    this.httpClient
      .get<homeResponse>('http://localhost:3000/home')
      .subscribe((sacola) => {
        console.log(sacola);
        this.resposta = sacola;
      });
  }

  toggleValue() {
    this.hideValue = !this.hideValue;
  }

  navigate() {
    this.router.navigate(['/home']);
  }
}
