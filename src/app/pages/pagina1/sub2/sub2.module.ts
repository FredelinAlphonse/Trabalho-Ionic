import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sub2PageRoutingModule } from './sub2-routing.module';

import { Sub2Page } from './sub2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sub2PageRoutingModule
  ],
  declarations: [Sub2Page]
})
export class Sub2PageModule {}
