import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-getalltem-price',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './getalltem-price.component.html',
  styleUrls: ['./getalltem-price.component.css']
})
export class GetalltemPriceComponent implements OnInit {
  itemPriceList: any[] = []; // Initialize an empty array for item prices

  constructor(private crudService: CRUDService, private router: Router) {}

  ngOnInit() {
    this.loadItemPrices();
  }

  loadItemPrices() {
    this.crudService.getAllItemPrices().subscribe(
      (data: any[]) => {
        this.itemPriceList = data;
      },
      (error) => {
        console.error('Error fetching item prices:', error);
      }
    );
  }

  editItemPrice(itemPrice: any) {
    // Navigate to the edit page with the item price ID
    this.router.navigate(['/edititemprice', itemPrice.itemPriceID]);
  }

  deleteItemPrice(itemPriceID: number) {
    this.crudService.deleteItemPrice(itemPriceID).subscribe(
      () => {
        console.log('Item price deleted successfully');
        // Reload the item price list after deletion
        this.loadItemPrices();
      },
      (error) => {
        console.error('Error deleting item price:', error);
      }
    );
  }
}
