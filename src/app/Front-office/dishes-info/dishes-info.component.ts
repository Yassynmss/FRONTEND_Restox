import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Models/item';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-dishes-info',
  templateUrl: './dishes-info.component.html',
  styleUrls: ['../../../assets/css/style-starter.css']
})
export class DishesInfoComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: CRUDService) {}

  ngOnInit(): void {
    this.itemService.getItems().subscribe(
      (data: Item[]) => {
        this.items = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des items:', error);
      }
    );
  }
}
