import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CRUDService } from 'src/app/Services/crud.service'; // Replace with the correct path to your CRUD service
import { CommonModule } from '@angular/common';
import { ItemDetail } from 'src/app/Models/itemDetail';

@Component({
  selector: 'app-get-all-item-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './getalltem-detail.component.html',
  styleUrls: ['./getalltem-detail.component.css']
})
export class GetalltemDetailComponent implements OnInit {
  itemDetailList: ItemDetail[] = []; // Initialize an empty array for item detail list

  constructor(private crudService: CRUDService, private router: Router) {}

  ngOnInit() {
    this.loadItemDetails();
  }

  loadItemDetails() {
    this.crudService.getAllItemDetails().subscribe(
      (data: ItemDetail[]) => {
        this.itemDetailList = data;
      },
      (error) => {
        console.error('Error fetching item details:', error);
      }
    );
  }

  editItemDetail(itemDetail: ItemDetail) {
    // Navigate to the edit page with the item detail ID
    this.router.navigate(['/edititemdetail', itemDetail.itemDetailID]);
  }

  deleteItemDetail(itemDetailID: number) {
    this.crudService.deleteItemDetail(itemDetailID).subscribe(
      () => {
        console.log('Item detail deleted successfully');
        // Reload the item detail list after deletion
        this.loadItemDetails();
      },
      (error) => {
        console.error('Error deleting item detail:', error);
      }
    );
  }
}
