import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterInfoPageRoutingModule } from './register-info-routing.module';

import { RegisterInfoPage } from './register-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterInfoPageRoutingModule
  ],
  declarations: [RegisterInfoPage]
})
export class RegisterInfoPageModule {}
