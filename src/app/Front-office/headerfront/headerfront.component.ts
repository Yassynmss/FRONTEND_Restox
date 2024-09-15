import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BizAccountService } from 'src/app/Services/biz-account.service';

@Component({
  selector: 'app-headerfront',
  standalone: true,
  imports: [RouterModule, CommonModule], 
  templateUrl: './headerfront.component.html',
  styleUrls: ['./headerfront.component.css']
})
export class HeaderfrontComponent {
  constructor(public bizaccountservice: BizAccountService) {}

  logout() {
    this.bizaccountservice.logout();
  }
}
