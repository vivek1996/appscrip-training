import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessProfileRoutingModule } from './business-profile-routing.module';
import { BusinessProfileComponent } from './business-profile/business-profile.component';

@NgModule({
  imports: [
    CommonModule,
    BusinessProfileRoutingModule
  ],
  declarations: [BusinessProfileComponent]
})
export class BusinessProfileModule { }
