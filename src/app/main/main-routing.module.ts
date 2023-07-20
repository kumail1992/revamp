import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'landing',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./dashboard/dashboard.module').then(
                (m) => m.DashboardModule
              ),
          },
          {
            path: '**',
            redirectTo: '',
          },
        ],
      },
      {
        path: 'client',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./dashboard/dashboard.module').then(
                (m) => m.DashboardModule
              ),
          },
          {
            path: 'in-play',
            loadChildren: () =>
              import('./in-play/in-play.module').then((m) => m.InPlayModule),
          },
          {
            path: '**',
            redirectTo: '',
          },
        ],
      },
      {
        path: '**',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
