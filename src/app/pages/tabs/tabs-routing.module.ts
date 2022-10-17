import { InvestimentosPageModule } from './../investimentos/investimentos.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../../pages/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'carteira',
        loadChildren: () =>
          import('../../pages/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'perfil',
        loadChildren: () =>
          import('../../pages/perfil/perfil-routing.module').then(
            (m) => m.PerfilPageRoutingModule
          ),
      },
      {
        path: 'tab2',
        loadChildren: () =>
          import('../../pages/tab-meio/tab-meio.module').then(
            (m) => m.TabMeioPageModule
          ),
      },
      {
        path: 'investimentos',
        loadChildren: () =>
          import('../../pages/investimentos/investimentos.module').then(
            (m) => m.InvestimentosPageModule
          ),
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
