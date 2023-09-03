import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './menu/food/food.component';
import { DrinksComponent } from './menu/drinks/drinks.component';
import { DessertsComponent } from './menu/desserts/desserts.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { LoginComponent } from './portfolio/login/login.component';
import { SignupComponent } from './portfolio/signup/signup.component';
import { DessertIeComponent } from 'src/app/filter/dessert_filter/dessert-ie/dessert-ie.component';
import { DrinksPageComponent } from './components/pages/drinks-page/drinks-page.component';
import { DessertsPageComponent } from './components/pages/desserts-page/desserts-page.component';
import { DashboardComponent } from './portfolio/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './portfolio/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './portfolio/verify-email/verify-email.component'; 
import { UserFormComponent } from './components/user-form/user-form.component';
import { DrinkIeComponent } from './filter/drink_filter/drink-ie.component';
import { FoodIeComponent } from './filter/food_filter/food-ie/food-ie.component';


const routes: Routes = [
  {path:'menu/food', component:FoodComponent},
  {path:'menu/drinks',component:DrinksComponent},
  {path:'menu/desserts',component:DessertsComponent},
  {path:'menu',component:MenuComponent},
  {path:'', redirectTo: 'login', pathMatch:'full'},
  {path:'menu/food/search/:searchTerm',component:FoodComponent},
  {path:'menu/drinks/search/:searchTerm',component:DrinksComponent} ,
  {path:'menu/desserts/search/:searchTerm',component:DessertsComponent} ,
  {path:'food/:id',component:FoodPageComponent},
  {path:'drinks/:id',component:DrinksPageComponent},
  {path:'desserts/:id',component:DessertsPageComponent},
  {path:'menu/food/tag/:tag',component:FoodComponent},
  {path:'menu/drinks/tag/:tag',component:DrinksComponent},
  {path:'menu/desserts/tag/:tag',component:DessertsComponent},
  {path:'desert_ie',component:DessertsComponent},
  {path:'home',component:HomeComponent},
  {path:'calculator',component:CalculatorComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'dessert_ie',component:DessertIeComponent},
  {path:'drink_ie',component:DrinkIeComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'verify-email',component:VerifyEmailComponent},
  {path:'user-form',component:UserFormComponent},
  {path:'food_ie',component:FoodIeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'top', // Set scroll behavior to 'top'
    anchorScrolling: 'enabled',
  }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
