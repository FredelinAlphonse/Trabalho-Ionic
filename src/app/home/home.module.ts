import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HighlightDirective } from '../directives/highlight.directive';
import { HomePageRoutingModule } from './home-routing.module';
import { DirectivesPageModule } from '../mudules/directives/directives.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    DirectivesPageModule,
  ],
  declarations: [HomePage,HighlightDirective]
})
export class HomePageModule {}
