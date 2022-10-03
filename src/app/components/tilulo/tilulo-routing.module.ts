import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiluloPage } from './tilulo.page';

const routes: Routes = [
  {
    path: '',
    component: TiluloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiluloPageRoutingModule {}
