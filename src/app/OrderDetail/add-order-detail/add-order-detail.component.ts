import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-add-order-detail',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-order-detail.component.html',
  styleUrls: ['./add-order-detail.component.css'],
})
export class AddOrderDetailComponent implements OnInit {
  orderDetailForm: FormGroup;
  items: any[] = [];
  orders: any[] = [];

  constructor(
    private fb: FormBuilder,
    private crudService: CRUDService,
    private router: Router
  ) {
    this.orderDetailForm = this.fb.group({
      orderID: [null, Validators.required],
      itemID: [null, Validators.required],
      price: [0, Validators.required],
      deliveryStatus: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.getOrders();
    this.getItems();
  }

  getOrders() {
    this.crudService.getOrders().subscribe(
      (data) => {
        this.orders = data;
      },
      (error) => {
        console.error('Error fetching orders', error);
      }
    );
  }

  getItems() {
    this.crudService.getItems().subscribe(
      (data) => {
        this.items = data;
      },
      (error) => {
        console.error('Error fetching items', error);
      }
    );
  }

  onSubmit() {
    if (this.orderDetailForm.valid) {
      const orderDetailData = this.orderDetailForm.value;
      console.log('Form Data:', orderDetailData);
      this.crudService.addOrderDetail(orderDetailData).subscribe(
        (response) => {
          console.log('Order detail added successfully', response);
          this.router.navigate(['/allorderdetails']);
        },
        (error) => {
          console.error('Error adding order detail', error);
        }
      );
    }
  }

  cancel() {
    this.router.navigate(['/allorderdetails']);
  }
}
