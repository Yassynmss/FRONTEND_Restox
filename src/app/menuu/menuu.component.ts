import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../Services/crud.service';
import { Item } from '../Models/item';
import { ItemType } from '../Models/ItemType';
import { ItemPrice } from '../Models/itemPrice'; 

@Component({
  selector: 'app-menuu',
  templateUrl: './menuu.component.html',
  styleUrls: ['../../assets/css/style-starter.css']
})
export class MenuuComponent implements OnInit {
  items: Item[] = [];
  itemPrices: ItemPrice[] = [];
  itemTypes = ItemType;

  constructor(private crudService: CRUDService) {}

  ngOnInit(): void {
    this.getAllItems();
    this.getAllItemPrices();
  }

  getAllItems(): void {
    this.crudService.getAllItemss().subscribe(
      (data: Item[]) => {
        this.items = data;
      },
      (error) => {
        console.error('Error fetching items', error);
      }
    );
  }

  getAllItemPrices(): void {
    this.crudService.getAllItemPrices().subscribe(
      (data: ItemPrice[]) => {
        this.itemPrices = data;
      },
      (error) => {
        console.error('Error fetching item prices', error);
      }
    );
  }

  // Method to get the price from ItemPrice based on itemPriceID in the Item
  getPrice(item: Item): number | null {
    const itemPrice = this.itemPrices.find(price => price.itemPriceID === item.itemPriceID);
    // Safeguard against undefined price by returning null if price is not a number
    return itemPrice && typeof itemPrice.price === 'number' ? itemPrice.price : null;
  }
}