import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@blox/material';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeaturesComponent } from './features/features.component';
import { ProductCardsComponent } from './product-cards/product-cards.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CategoriesCardComponent } from './categories-card/categories-card.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturesComponent,
    ProductCardsComponent,
    CategoriesCardComponent,
    FooterComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    SlickCarouselModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
