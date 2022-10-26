import { Component, OnInit } from '@angular/core';
import { invetimentoObjeto } from 'src/app/model/investimentos.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-investimentos',
  templateUrl: './investimentos.page.html',
  styleUrls: ['./investimentos.page.scss'],
})
export class InvestimentosPage implements OnInit {
  data: invetimentoObjeto;

  constructor(private httpClient: HttpClient) {}

  hideValue: boolean = true;

  ngOnInit(): void {
    this.buscarDadosDeInvestimentos();
  }

  buscarDadosDeInvestimentos() {
    this.httpClient
      .get<invetimentoObjeto>('http://localhost:3333/investimentos')
      .subscribe(
        (results) => {
          this.data = results;

          console.log(results);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  toogleValue() {
    this.hideValue = !this.hideValue;
  }
}
