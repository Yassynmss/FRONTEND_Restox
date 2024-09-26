import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  orderForm: FormGroup;
  paymentMethods = [
    { id: 'TND', name: 'Tunisian Dinar' },
    { id: 'USD', name: 'Dollar' },
    { id: 'EUR', name: 'Euro' }
  ];
  deliveryStatuses: any[] = [];
  deliveryTypes: any[] = [];
  bizaccounts: any[] = [];
  paymentStatusOptions = ['Paid', 'Pending', 'Failed'];

  constructor(
    private fb: FormBuilder,
    private crudService: CRUDService,
    private router: Router
  ) {
    this.orderForm = this.fb.group({
      applicationUserId: ['', Validators.required],
      orderDate: [new Date().toISOString().slice(0, 16), Validators.required], // Initialize with current date and time
      paymentMethod: [null, Validators.required],
      paymentStatus: ['', Validators.required],
      deliveryStatusID: [null, Validators.required],
      deliveryTypeID: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.getCustomers();
    this.getDeliveryStatuses();
    this.getDeliveryTypes();
    this.updateCurrentDateTime();
  }

  updateCurrentDateTime() {
    setInterval(() => {
      const currentDateTime = new Date().toISOString().slice(0, 16);
      this.orderForm.patchValue({ orderDate: currentDateTime });
    }, 1000); // Update every second
  }

  getCustomers() {
    this.crudService.getCustomer().subscribe(
      data => {
        this.bizaccounts = data;
      },
      error => {
        console.error('Error fetching customers', error);
      }
    );
  }

  getDeliveryStatuses() {
    this.crudService.getDeliveryStatuses().subscribe(
      data => {
        this.deliveryStatuses = data;
      },
      error => {
        console.error('Error fetching delivery statuses', error);
      }
    );
  }

  getDeliveryTypes() {
    this.crudService.getDeliveryTypes().subscribe(
      data => {
        this.deliveryTypes = data;
      },
      error => {
        console.error('Error fetching delivery types', error);
      }
    );
  }

  onSubmit() {
    if (this.orderForm.valid) {
      const orderData = this.orderForm.value;
      console.log('Form Data:', orderData);
      this.crudService.addOrder(orderData).subscribe(
        response => {
          console.log('Order added successfully', response);
          this.router.navigate(['/allorder']);

        },
        error => {
          console.error('Error adding order', error);
        }
      );
    }
  }

  cancel() {
    this.router.navigate(['/allorder']);
  }
}
