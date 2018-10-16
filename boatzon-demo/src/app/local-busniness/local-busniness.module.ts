import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalBusninessRoutingModule } from './local-busniness-routing.module';
import { BusinessViewComponent } from './business-view/business-view.component';

@NgModule({
  imports: [
    CommonModule,
    LocalBusninessRoutingModule
  ],
  declarations: [BusinessViewComponent]
})
export class LocalBusninessModule { }
