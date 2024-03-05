import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitPageComponent } from './init-page.component';
import { InitPageRoutingModule } from './init-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    InitPageRoutingModule
  ],
  declarations: [InitPageComponent]
})
export class InitPageModule { }
