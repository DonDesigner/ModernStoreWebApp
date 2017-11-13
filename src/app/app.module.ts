

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Rotas
import { Routing, RoutingProviders } from './app.routing';

//root
import { AppComponent } from './app.component';

//shareds
import { HeadBarComponent } from './components/shared/head-bar/head-bar.component';
import { SubMenuComponent } from './components/shared/sub-menu/sub-menu.component';
import { FooterComponent } from './components/shared/footer/footer.component';

//pages
import { ProductListComponent } from './components/product-list/product-list.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from  './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

//service
import  { CartService } from './services/cart.service';
import { AuthService } from './services/auth.service';

//Diretivas
import { NumberDirective } from './directives/number.directive';

@NgModule({
  declarations: [
    NumberDirective,
    AppComponent,
    HeadBarComponent,
    SubMenuComponent,
    ProductListComponent,
    FooterComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    CartPageComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Routing
  ],
  providers: [CartService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
