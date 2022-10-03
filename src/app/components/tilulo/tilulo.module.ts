import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiluloPageRoutingModule } from './tilulo-routing.module';

import { TiluloPage } from './tilulo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiluloPageRoutingModule
  ],
  declarations: [TiluloPage]
})
export class TiluloPageModule {}
