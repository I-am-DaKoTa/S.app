import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('../profile/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'todo',
        loadChildren: () => import('../todo/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'calculator',
        loadChildren: () => import('../calculator/tab3.module').then(m => m.Tab3PageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
