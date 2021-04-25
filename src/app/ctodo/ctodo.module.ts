import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CtodoPageRoutingModule } from './ctodo-routing.module';

import { CtodoPage } from './ctodo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CtodoPageRoutingModule
  ],
  declarations: [CtodoPage]
})
export class CtodoPageModule {}
