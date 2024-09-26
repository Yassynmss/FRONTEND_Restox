import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BizAccount } from 'src/app/Models/BizAccount';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-aboutuss',
  templateUrl: './aboutuss.component.html',
  styleUrls: ['../../../assets/css/style-starter.css']
})
export class AboutussComponent implements OnInit {
  chefs: BizAccount[] = [];

  constructor(private chefService: CRUDService) {}

  ngOnInit(): void {
    this.loadChefs();
  }

  loadChefs(): void {
    this.chefService.getChefs().subscribe(
      (data) => {
        this.chefs = data;
      },
      (error) => {
        console.error('Error fetching chefs', error);
      }
    );
  }
}