import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-getall-order-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './getall-order-detail.component.html',
  styleUrls: ['./getall-order-detail.component.css']
})
export class GetallOrderDetailComponent implements OnInit {
  orderDetailList: any[] = []; // Initialize an empty array for order details

  constructor(private crudService: CRUDService, private router: Router) {}

  ngOnInit() {
    this.loadOrderDetails();
  }

  loadOrderDetails() {
    this.crudService.getAllOrderDetails().subscribe(
      (data: any[]) => {
        this.orderDetailList = data;
      },
      (error) => {
        console.error('Error fetching order details:', error);
      }
    );
  }

  editOrderDetail(orderDetail: any) {
    // Navigate to the edit page with the order detail ID
    this.router.navigate(['/editorderdetail', orderDetail.orderDetailID]);
  }

  deleteOrderDetail(orderDetailID: number) {
    this.crudService.deleteOrderDetail(orderDetailID).subscribe(
      () => {
        console.log('Order detail deleted successfully');
        // Reload the order details list after deletion
        this.loadOrderDetails();
      },
      (error) => {
        console.error('Error deleting order detail:', error);
      }
    );
  }
}
