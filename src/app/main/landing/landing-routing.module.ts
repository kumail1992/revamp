import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    canActivateChild:[],
    children:[
      {
        path:'dashboard',
        loadChildren: () =>
        import('../dashboard/dashboard.module').then(
          (m) => m.DashboardModule,
        )
      },
      {
        path:'**',
        redirectTo: 'dashboard'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
