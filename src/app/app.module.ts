import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FoodComponent } from './menu/food/food.component';
import { DrinksComponent } from './menu/drinks/drinks.component';
import { DessertsComponent } from './menu/desserts/desserts.component';

import { FoodSearchComponent } from './components/partials/food_search/search.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { TagsComponent } from './components/partials/tags/tags.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoginComponent } from './portfolio/login/login.component';
import { SignupComponent } from './portfolio/signup/signup.component';
import { IncludeExcludeComponent } from './include-exclude/include-exclude.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DrinksPageComponent } from './components/pages/drinks-page/drinks-page.component';
import { DessertsPageComponent } from './components/pages/desserts-page/desserts-page.component';
import { DrinksSearchComponent } from './components/partials/drinks-search/drinks-search.component';
import { DessertsSearchComponent } from './components/partials/desserts-search/desserts-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FoodComponent,
    DrinksComponent,
    DessertsComponent,
    FoodSearchComponent,
    DrinksSearchComponent,
    FoodPageComponent,
    TagsComponent,
    HomeComponent,
    CalculatorComponent,
    PortfolioComponent,
    LoginComponent,
    SignupComponent,
    IncludeExcludeComponent,
    DrinksPageComponent,
    DessertsPageComponent,
    DessertsSearchComponent

  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule

    // RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
