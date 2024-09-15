import { NgModule } from '@angular/core';
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
  {path:'editorder/:id', component:EditOrderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
