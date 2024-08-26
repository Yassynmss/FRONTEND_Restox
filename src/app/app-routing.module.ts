import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Front-office/home/home.component';
import { AddAdressComponent } from './adress/add-adress/add-adress.component';
import { DeleteAdressComponent } from './adress/delete-adress/delete-adress.component';
import { GetallAdressComponent } from './adress/getall-adress/getall-adress.component';
import { EditAdressComponent } from './adress/edit-adress/edit-adress.component';
import { AddBizAccountComponent } from './BizAccount/add-biz-account/add-biz-account.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'addadress', component:AddAdressComponent},
  {path:'DeleteAdress', component:DeleteAdressComponent},
  {path:"getAdresses" , component:GetallAdressComponent},
  { path: 'edit-adress/:id', component: EditAdressComponent },
  {path: 'addaccount' , component: AddBizAccountComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
