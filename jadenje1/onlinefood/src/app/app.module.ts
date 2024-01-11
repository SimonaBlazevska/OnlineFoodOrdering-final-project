import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/pages/home/home.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/pages/search/search.component';
import { TagComponent } from './components/pages/tag/tag.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CardPageComponent } from './components/pages/card-page/card-page.component';
import { TitleComponent } from './component/pages/title/title.component';
import { TitleeComponent } from './component/pages/titlee/titlee.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagComponent,
    FoodPageComponent,
    CardPageComponent,
    TitleComponent,
    TitleeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
