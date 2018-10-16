import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessViewComponent } from './business-view/business-view.component';

const routes: Routes = [{ path: '', component: BusinessViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalBusninessRoutingModule {}
