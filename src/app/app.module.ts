import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SystemRoutingModule } from './shared/routing/system-routing/system-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    SystemRoutingModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
