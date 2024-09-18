import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CRUDService } from 'src/app/Services/crud.service'; 
import { OrderDetail } from 'src/app/Models/OrderDetail';

@Component({
  selector: 'app-edit-order-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './edit-order-detail.component.html',
  styleUrls: ['./edit-order-detail.component.css']
})
export class EditOrderDetailComponent implements OnInit {
  editOrderDetailForm: FormGroup;
  orderDetailID?: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private crudService: CRUDService
  ) {
    this.editOrderDetailForm = this.fb.group({
      orderID: [null, Validators.required],
      itemID: [null, Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      deliveryStatus: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.orderDetailID = +id;
        this.getOrderDetail();
      } else {
        console.error('No Order Detail ID found in route');
      }
    });
  }

  getOrderDetail() {
    if (this.orderDetailID !== undefined) {
      this.crudService.getOrderDetailById(this.orderDetailID).subscribe(
        (data: OrderDetail) => {
          this.editOrderDetailForm.patchValue(data);
        },
        (error) => {
          console.error('Error fetching Order Detail:', error);
        }
      );
    } else {
      console.error('Order Detail ID is undefined. Cannot fetch Order Detail.');
    }
  }

  updateOrderDetail() {
    if (this.editOrderDetailForm.valid && this.orderDetailID !== undefined) {
      const updatedOrderDetail: OrderDetail = {
        orderDetailID: this.orderDetailID,
        ...this.editOrderDetailForm.value
      };

      this.crudService.updateOrderDetail(updatedOrderDetail).subscribe(
        (response) => {
          console.log('Order Detail updated successfully:', response);
          this.navigateToOrderDetailList();
        },
        (error) => {
          console.error('Error updating Order Detail:', error);
        }
      );
    } else {
      console.error('Form is invalid or OrderDetailID is undefined');
    }
  }

  navigateToOrderDetailList() {
    this.router.navigate(['/allorderdetails']);
  }
}
