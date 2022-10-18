import { Component, OnInit } from '@angular/core';
import { ActivationStart, Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { homeResponse, investResponse } from 'src/app/model/home.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  resposta: homeResponse;
  investimento: investResponse;

  constructor(private router: Router, private httpClient: HttpClient) {}

  ngOnInit(): void {
    console.log('chamou aqui');
    this.httpClient
      .get<homeResponse>('http://localhost:3000/home')
      .subscribe((sacola) => {
        console.log(sacola);
        this.resposta = sacola;
      });
  }

  navigate() {
    this.router.navigate(['/home']);
  }
}
