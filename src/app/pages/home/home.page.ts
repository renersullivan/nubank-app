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

  eyeIconVariable: string = 'eye-off-outline';

  ngOnInit(): void {
    this.buscarDadosDaHome();
  }

  buscarDadosDaHome() {
    this.httpClient
      .get<homeResponse>('http://localhost:3000/home')
      .subscribe((sacola) => {
        console.log(sacola);
        this.resposta = sacola;
      });
  }

  apertouBotaoEsconderValores() {
    this.inverterValorHide();
    this.trocarIconOlho();
  }

  inverterValorHide() {
    this.hideValue = !this.hideValue; //estou invertendo o valor
  }

  trocarIconOlho() {
    if (this.hideValue === true) {
      this.eyeIconVariable = 'eye-off-outline';
      return;
    }

    if (this.hideValue === false) {
      this.eyeIconVariable = 'eye-outline';
      return;
    }
  }

  navigate() {
    this.router.navigate(['/home']);
  }
}
