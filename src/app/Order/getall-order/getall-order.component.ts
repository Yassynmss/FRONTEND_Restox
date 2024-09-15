import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CRUDService } from 'src/app/Services/crud.service';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-getall-order',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './getall-order.component.html',
  styleUrls: ['./getall-order.component.css']
})
export class GetallOrderComponent implements OnInit {
  orderList: any[] = []; // Initialize an empty array for orders
  orderForm = this.fb.group({
    customerID: [null, Validators.required],
    orderDate: [null, Validators.required],
    paymentMethodID: [null, Validators.required],
    paymentStatus: ['', Validators.required],
    deliveryStatusID: [null, Validators.required],
    deliveryTypeID: [null, Validators.required],
  });

  constructor(private crudService: CRUDService, private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    this.crudService.getAllOrders().subscribe(
      (data: any[]) => {
        this.orderList = data;
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    );
  }

  editOrder(order: any) {
    this.router.navigate(['/editorder', order.orderID]);
  }

  deleteOrder(orderID: number) {
    this.crudService.deleteOrder(orderID).subscribe(
      () => {
        console.log('Order deleted successfully');
        this.loadOrders(); // Reload the order list after deletion
      },
      (error) => {
        console.error('Error deleting order:', error);
      }
    );
  }
}
