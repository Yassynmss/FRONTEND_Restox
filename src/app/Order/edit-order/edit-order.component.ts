import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-edit-order',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
  editOrderForm: FormGroup;
  orderID?: number;
  paymentMethods = [
    { id: 'TND', name: 'Tunisian Dinar' },
    { id: 'USD', name: 'Dollar' },
    { id: 'EUR', name: 'Euro' }
  ];
  paymentStatusOptions = ['Paid', 'Pending', 'Failed'];
  deliveryStatuses: any[] = [];
  deliveryTypes: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private crudService: CRUDService
  ) {
    this.editOrderForm = this.fb.group({
      applicationUserId: ['', Validators.required],
      orderDate: [null, Validators.required],
      paymentMethod: [null, Validators.required],
      paymentStatus: ['', Validators.required],
      deliveryStatusID: [null, Validators.required],
      deliveryTypeID: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.orderID = +id;
        this.getOrder();
      }
    });
    this.getDeliveryStatuses();
    this.getDeliveryTypes();
    this.updateCurrentDateTime();


  }
  updateCurrentDateTime() {
    setInterval(() => {
      const currentDateTime = new Date().toISOString().slice(0, 16);
      this.editOrderForm.patchValue({ orderDate: currentDateTime });
    }, 1000); // Mise à jour chaque seconde
  }
  getOrder() {
    if (this.orderID !== undefined) {
      this.crudService.getOrderById(this.orderID).subscribe(
        (data) => {
          this.editOrderForm.patchValue(data);
        },
        error => {
          console.error('Error fetching order data', error);
        }
      );
    }
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
    if (this.editOrderForm.valid && this.orderID !== undefined) {
      const updatedOrder = {
        orderID: this.orderID,
        ...this.editOrderForm.value
      };

      this.crudService.updateOrder(updatedOrder).subscribe(
        response => {
          console.log('Order updated successfully', response);
          this.router.navigate(['/allorder']);
        },
        error => {
          console.error('Error updating order', error);
        }
      );
    }
  }

  cancel() {
    this.router.navigate(['/allorders']);
  }
}
