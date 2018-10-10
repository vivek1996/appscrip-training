import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@blox/material';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeaturesComponent } from './features/features.component';
import { ProductCardsComponent } from './product-cards/product-cards.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturesComponent,
    ProductCardsComponent
  ],
  imports: [BrowserModule, MaterialModule, SlickCarouselModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
