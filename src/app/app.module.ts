import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BtnRoundedComponent } from './components/btn-rounded/btn-rounded.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalMessageComponent } from './components/modal-message/modal-message.component';

@NgModule({
  declarations: [AppComponent, BtnRoundedComponent, ModalMessageComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
