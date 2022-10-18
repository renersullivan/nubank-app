import { Component, OnInit } from '@angular/core';
import { investResponse } from 'src/app/model/home.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-investimentos',
  templateUrl: './investimentos.page.html',
  styleUrls: ['./investimentos.page.scss'],
})
export class InvestimentosPage implements OnInit {
  investimento: investResponse;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient
      .get<investResponse>('http://localhost:3000/investimentos')
      .subscribe((resultado) => {
        this.investimento = resultado;
      });
  }
}
