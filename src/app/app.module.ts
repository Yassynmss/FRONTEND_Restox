import { NgModule } from '@angular/core';
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
    AddBizAccountComponent
    
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
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
