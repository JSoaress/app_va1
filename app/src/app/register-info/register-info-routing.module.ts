import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterInfoPage } from './register-info.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterInfoPageRoutingModule {}
