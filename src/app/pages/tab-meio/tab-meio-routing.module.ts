import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabMeioPage } from './tab-meio.page';

const routes: Routes = [
  {
    path: '',
    component: TabMeioPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabMeioPageRoutingModule {}
