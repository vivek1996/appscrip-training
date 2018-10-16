import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileViewRoutingModule } from './profile-view-routing.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileViewRoutingModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileViewModule { }
