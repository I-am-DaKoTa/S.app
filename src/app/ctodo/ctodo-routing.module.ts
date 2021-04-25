import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CtodoPage } from './ctodo.page';

const routes: Routes = [
  {
    path: '',
    component: CtodoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CtodoPageRoutingModule {}
