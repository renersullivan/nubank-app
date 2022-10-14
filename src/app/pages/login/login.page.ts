import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  cpf: any;
  chamaServicoParaLogar() {
    throw new Error('Method not implemented.');
  }
  detectSenha(arg0: EventTarget) {
    throw new Error('Method not implemented.');
  }
  detectCpf(arg0: EventTarget) {
    throw new Error('Method not implemented.');
  }

  constructor() {}

  ngOnInit() {}
}
