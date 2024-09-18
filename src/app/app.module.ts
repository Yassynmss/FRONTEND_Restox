import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderfrontComponent } from "./Front-office/headerfront/headerfront.component";
import { FooterfrontComponent } from "./Front-office/footerfront/footerfront.component";
import { WelcomePageComponent } from './Front-office/welcome-page/welcome-page.component';
import { RestoInfoComponent } from './Front-office/resto-info/resto-info.component';
import { DishesInfoComponent } from './Front-office/dishes-info/dishes-info.component';
import { NewDishesComponent } from './Front-office/new-dishes/new-dishes.component';
import { DashboardRestoComponent } from './Front-office/dashboard-resto/dashboard-resto.component';
import { RestoSpecialsComponent } from './Front-office/resto-specials/resto-specials.component';
import { MenuComponent } from './Front-office/menu/menu.component';
import { AboutUSComponent } from './Front-office/about-us/about-us.component';
import { ContactUSComponent } from './Front-office/contact-us/contact-us.component';
import { HomeComponent } from './Front-office/home/home.component';
import { AddAdressComponent } from './adress/add-adress/add-adress.component';
import { GetallAdressComponent } from './adress/getall-adress/getall-adress.component';
import { EditAdressComponent } from './adress/edit-adress/edit-adress.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AddBizAccountComponent } from './BizAccount/add-biz-account/add-biz-account.component';
import { RegisterComponent } from './authorize/register/register.component';
import { LoginComponent } from './authorize/login/login.component';
import { AddCombiComponent } from './combi/add-combi/add-combi.component';
import { AdditemComponent } from './item/additem/additem.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { QRCodeModule } from 'angularx-qrcode';
import { AddCurrencyComponent } from './Currency/add-currency/add-currency.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    RestoInfoComponent,
    DishesInfoComponent,
    NewDishesComponent,
    DashboardRestoComponent,
    RestoSpecialsComponent,
    MenuComponent,
    AboutUSComponent,
    ContactUSComponent,
    HomeComponent,
    AddAdressComponent,
    EditAdressComponent,
    AddBizAccountComponent,
    RegisterComponent,
    LoginComponent,
    AddCombiComponent,
    AddCurrencyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    HeaderfrontComponent,
    FooterfrontComponent,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
