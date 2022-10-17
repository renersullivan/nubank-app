import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabMeioPageRoutingModule } from './tab-meio-routing.module';

import { TabMeioPage } from './tab-meio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabMeioPageRoutingModule
  ],
  declarations: [TabMeioPage]
})
export class TabMeioPageModule {}
