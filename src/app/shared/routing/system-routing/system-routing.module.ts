import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { systemRoutes } from './system-routing-config';

@NgModule({
  imports: [RouterModule.forRoot(systemRoutes, { useHash: true })],
  exports: [RouterModule],
})
export class SystemRoutingModule { }
