import { Component, OnInit } from '@angular/core';
import { investimentos } from 'src/app/model/investimentos.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-investimentos',
  templateUrl: './investimentos.page.html',
  styleUrls: ['./investimentos.page.scss'],
})
export class InvestimentosPage implements OnInit {
  investimentos: investimentos;

  constructor(private httpClient: HttpClient) {}

  hideValue: boolean = true;

  ngOnInit(): void {
    this.buscarDadosDeInvestimentos();
  }

  buscarDadosDeInvestimentos() {
    this.httpClient
      .get<investimentos>('http://localhost:3333/investimentos')
      .subscribe((results) => {
        this.investimentos = results;

        console.log(results);
      });
  }
  toogleValue() {
    this.hideValue = !this.hideValue;
  }
}
