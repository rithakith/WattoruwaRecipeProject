import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FoodComponent } from './menu/food/food.component';
import { DrinksComponent } from './menu/drinks/drinks.component';
import { DessertsComponent } from './menu/desserts/desserts.component';

import { FoodSearchComponent } from './components/partials/food_search/search.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { TagsComponent } from './components/partials/food_tags/tags.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { LoginComponent } from './portfolio/login/login.component';
import { SignupComponent } from './portfolio/signup/signup.component';
import { IncludeExcludeComponent } from './include-exclude/include-exclude.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DrinksPageComponent } from './components/pages/drinks-page/drinks-page.component';
import { DessertsPageComponent } from './components/pages/desserts-page/desserts-page.component';
import { DrinksSearchComponent } from './components/partials/drinks-search/drinks-search.component';
import { DessertsSearchComponent } from './components/partials/desserts-search/desserts-search.component';
import { DrinksTagsComponent } from './components/partials/drinks-tags/drinks-tags.component';
import { DessertsTagsComponent } from './components/partials/desserts-tags/desserts-tags.component';
import { FooterComponent } from './components/footer/footer.component';
import { RatingComponent } from './components/rating/rating.component';
import { LoadingComponent } from './components/partials/loading/loading.component';
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';

import { environment } from '../environments/environment';
import { AngularFireModule} from '@angular/fire/compat';
import { VerifyEmailComponent } from './portfolio/verify-email/verify-email.component';
import { DashboardComponent } from './portfolio/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './portfolio/forgot-password/forgot-password.component';
import { UserFormComponent } from './components/user-form/user-form.component';

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
    LoginComponent,
    SignupComponent,
    IncludeExcludeComponent,
    DrinksPageComponent,
    DessertsPageComponent,
    DessertsSearchComponent,
    DrinksTagsComponent,
    DessertsTagsComponent,
    FooterComponent,
    RatingComponent,
    LoadingComponent,
    VerifyEmailComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    UserFormComponent

  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase)
  

    // RatingModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
