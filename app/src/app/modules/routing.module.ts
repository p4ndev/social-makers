import { NgModule     } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTE_CONFIG } from '../settings/route.config';

@NgModule({
  imports: [RouterModule.forRoot(ROUTE_CONFIG)],
  exports: [RouterModule]
})
export class RoutingModule { }