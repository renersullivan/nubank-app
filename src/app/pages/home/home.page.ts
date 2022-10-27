import { Component, OnInit } from '@angular/core';
import { ActivationStart, Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { homeResponse } from 'src/app/model/home.model';
import { ModalController } from '@ionic/angular';
import { ModalMessageComponent } from '../../components/modal-message/modal-message.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  resposta: homeResponse;
  modelData: any;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    public modalController: ModalController
  ) {}

  hideValue: boolean = true;

  eyeIconVariable: string = 'eye-off-outline';

  ngOnInit(): void {
    this.buscarDadosDaHome();
  }

  buscarDadosDaHome() {
    this.httpClient
      .get<homeResponse>('http://localhost:3333/home')
      .subscribe((sacola) => {
        this.resposta = sacola;
      });
  }
  logar() {}

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

  async openIonModal(param) {
    const modal = await this.modalController.create({
      component: ModalMessageComponent,
      componentProps: {
        model_title: param,
      },
      cssClass: 'alert-home-modal',
    });

    modal.onDidDismiss().then((modelData) => {
      if (modelData !== null) {
        this.router.navigate([modelData.data]);
      }
    });
    return await modal.present();
  }
}
