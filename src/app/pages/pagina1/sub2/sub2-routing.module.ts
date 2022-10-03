import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sub2Page } from './sub2.page';

const routes: Routes = [
  {
    path: '',
    component: Sub2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sub2PageRoutingModule {}
