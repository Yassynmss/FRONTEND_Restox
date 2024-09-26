import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Front-office/home/home.component';
import { AddAdressComponent } from './adress/add-adress/add-adress.component';
import { DeleteAdressComponent } from './adress/delete-adress/delete-adress.component';
import { GetallAdressComponent } from './adress/getall-adress/getall-adress.component';
import { EditAdressComponent } from './adress/edit-adress/edit-adress.component';
import { AddBizAccountComponent } from './BizAccount/add-biz-account/add-biz-account.component';
import { RestoInfoComponent } from './Front-office/resto-info/resto-info.component';
import { LoginComponent } from './authorize/login/login.component';
import { RegisterComponent } from './authorize/register/register.component';
import { AddCombiComponent } from './combi/add-combi/add-combi.component';
import { AdditemComponent } from './item/additem/additem.component';
import { GetallCombiComponent } from './combi/getall-combi/getall-combi.component';
import { EditCombiComponent } from './combi/edit-combi/edit-combi.component';
import { DeleteCombiComponent } from './combi/delete-combi/delete-combi.component';
import { AddCurrencyComponent } from './Currency/add-currency/add-currency.component';
import { GetallCurrencyComponent } from './Currency/getall-currency/getall-currency.component';
import { EditCurrencyComponent } from './Currency/edit-currency/edit-currency.component';
import { AddItemDetailComponent } from './itemDetail/add-item-detail/add-item-detail.component';
import { GetalltemDetailComponent } from './itemDetail/getalltem-detail/getalltem-detail.component';
import { EditItemDetailComponent } from './itemDetail/edit-item-detail/edit-item-detail.component';
import { AddItemPriceComponent } from './itemPrice/add-item-price/add-item-price.component';
import { GetalltemPriceComponent } from './itemPrice/getalltem-price/getalltem-price.component';
import { EditItemPriceComponent } from './itemPrice/edit-item-price/edit-item-price.component';
import { AddOrderComponent } from './Order/add-order/add-order.component';
import { GetallOrderComponent } from './Order/getall-order/getall-order.component';
import { EditOrderComponent } from './Order/edit-order/edit-order.component';
import { AddOrderDetailComponent } from './OrderDetail/add-order-detail/add-order-detail.component';
import { GetallOrderDetailComponent } from './OrderDetail/getall-order-detail/getall-order-detail.component';
import { EditOrderDetailComponent } from './OrderDetail/edit-order-detail/edit-order-detail.component';
import { AddMenuComponent } from './Menu/add-menu/add-menu.component';
import { GetallMenuComponent } from './Menu/getall-menu/getall-menu.component';
import { EditMenuComponent } from './Menu/edit-menu/edit-menu.component';
import { AddMenuPageComponent } from './MenuPage/add-menu-page/add-menu-page.component';
import { MenuuComponent } from './menuu/menuu.component';
import { ContactussComponent } from './Front-office/contactuss/contactuss.component';
import { AboutUSComponent } from './Front-office/about-us/about-us.component';
import { AboutussComponent } from './Front-office/aboutuss/aboutuss.component';
import { AddLanguageComponent } from './Language/add-language/add-language.component';
import { GetallLanguageComponent } from './Language/getall-language/getall-language.component';
import { EditLanguageComponent } from './Language/edit-language/edit-language.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'addadress', component:AddAdressComponent},
  {path:'DeleteAdress', component:DeleteAdressComponent},
  {path:"getAdresses" , component:GetallAdressComponent},
  { path: 'edit-adress/:id', component: EditAdressComponent },
  {path: 'addaccount' , component: AddBizAccountComponent},
  {path:"alladdresses" , component: RestoInfoComponent },
  {path:"login" , component: LoginComponent},
  {path:"register" , component: RegisterComponent},
  {path:"addcombi" , component:AddCombiComponent},
  {path:"additem", component:AdditemComponent},
  {path:"allcombi", component:GetallCombiComponent},
  {path:"editcombi/:id", component:EditCombiComponent},
  {path:"deletecombi",component:DeleteCombiComponent},
  {path:"addcurrency", component:AddCurrencyComponent},
  {path:"getallcurrency", component:GetallCurrencyComponent},
  {path:"editcurrency/:id", component:EditCurrencyComponent},
  {path:"additemdetail", component:AddItemDetailComponent},
  {path:"allitemdetail", component:GetalltemDetailComponent},
  {path:"edititemdetail/:id", component:EditItemDetailComponent},
  {path:"additemprice", component:AddItemPriceComponent},
  {path:"allitemprice", component:GetalltemPriceComponent},
  { path: 'edititemprice/:id', component: EditItemPriceComponent },
  {path:'addorder', component:AddOrderComponent},
  {path:'allorder' , component:GetallOrderComponent},
  {path:'editorder/:id', component:EditOrderComponent},
  {path:'addorderdetail' , component:AddOrderDetailComponent},
  {path:'allorderdetails',component:GetallOrderDetailComponent},
  {path:'editorderdetail/:id', component:EditOrderDetailComponent},
  {path:'addmenu' , component:AddMenuComponent},
  {path:'allmenu' , component:GetallMenuComponent},
  {path:'editmenu/:id' , component:EditMenuComponent},
  {path:'addmenupage', component:AddMenuPageComponent},
  {path:'menuu', component:MenuuComponent},
  {path:'contactus' , component:ContactussComponent},
  {path:'aboutuss' , component:AboutussComponent},
  {path:'addlanguage', component:AddLanguageComponent},
  {path:'all-languages'  , component:GetallLanguageComponent},
  {path:'editlanguage/:id', component:EditLanguageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
