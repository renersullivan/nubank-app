import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  cpf: string;
  constructor(private httpClient: HttpClient, private router: Router) {}

  cadastrar(event) {
    this.cpf = event.target.value; // valor inserido no input
  }

  ngOnInit() {}

  fazerLogin() {
    let auth = {
      login: this.cpf,
      senha: '123',
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

// propriedade que liga o html ao ts
