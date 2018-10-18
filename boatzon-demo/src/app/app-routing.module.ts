import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren:
      './local-busniness/local-busniness.module#LocalBusninessModule'
  },
  {
    path: 'profile',
    loadChildren: './profile-view/profile-view.module#ProfileViewModule'
  },
  {
    path: 'business-profile',
    loadChildren:
      './business-profile/business-profile.module#BusinessProfileModule'
  },
  {
    path: '**',
    loadChildren:
      './local-busniness/local-busniness.module#LocalBusninessModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
