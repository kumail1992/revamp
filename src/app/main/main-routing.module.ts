import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'client',
        loadChildren: () =>
          import('./client/client.module').then((m) => m.ClientModule)
      },
      {
        path:'**',
        redirectTo:'client'
      }
    ],
  },
  {
    path:'**',
    redirectTo:'/client'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
