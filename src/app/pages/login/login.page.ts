import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  cpf: string;
  senha: string;
  constructor(private httpClient: HttpClient, private router: Router) {}

  cadastrar(event) {
    this.cpf = event.target.value; // valor inserido no input
  }
  password(event) {
    this.senha = event.target.value;
  }

  ngOnInit() {
    this.fazerLogin();
  }

  fazerLogin() {
    let auth = {
      login: this.cpf,
      senha: this.senha,
    };
    console.log(auth);
    this.httpClient
      .post<any>('http://localhost:3333/auth', auth)
      .subscribe((response) => {
        console.log(response);
        if (response.auth === true) {
          this.router.navigateByUrl('/nu/home');
        } else {
          console.log('senha errada');
        }
      });
  }
}
