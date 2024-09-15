import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CRUDService } from 'src/app/Services/crud.service'; // Update the path as needed
import { Currency } from 'src/app/Models/currency'; // Update the path as needed
import { Item } from 'src/app/Models/item'; // Update the path as needed
import { ItemPrice } from 'src/app/Models/itemPrice'; // Update the path as needed

@Component({
  selector: 'app-edit-item-price',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './edit-item-price.component.html',
  styleUrls: ['./edit-item-price.component.css']
})
export class EditItemPriceComponent implements OnInit {
  editItemPriceForm: FormGroup;
  itemPriceID?: number;
  Items: Item[] = []; // List of Items
  Currencies: Currency[] = []; // List of Currencies

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private crudService: CRUDService
  ) {
    this.editItemPriceForm = this.fb.group({
      price: [null, [Validators.required, Validators.min(0)]],
      discount: [null, [Validators.min(0), Validators.max(100)]],
      displayPrice: [{ value: null, disabled: true }] 
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.itemPriceID = +id;
        this.getItemPrice();
      } else {
        console.error('No Item Price ID found in route');
      }
    });

    this.setupDisplayPriceCalculation();
  }

  getItemPrice() {
    if (this.itemPriceID !== undefined) {
      this.crudService.getItemPriceById(this.itemPriceID).subscribe(
        (data: ItemPrice) => {
          this.editItemPriceForm.patchValue(data);
        },
        (error) => {
          console.error('Error fetching Item Price:', error);
        }
      );
    } else {
      console.error('Item Price ID is undefined. Cannot fetch Item Price.');
    }
  }

 

  setupDisplayPriceCalculation() {
    this.editItemPriceForm.get('price')?.valueChanges.subscribe(() => {
      this.calculateDisplayPrice();
    });
    this.editItemPriceForm.get('discount')?.valueChanges.subscribe(() => {
      this.calculateDisplayPrice();
    });
  }

  calculateDisplayPrice() {
    const price = this.editItemPriceForm.get('price')?.value;
    const discount = this.editItemPriceForm.get('discount')?.value;

    if (price && discount !== null) {
      const discountAmount = price * (discount / 100);
      const displayPrice = price - discountAmount;
      this.editItemPriceForm.get('displayPrice')?.setValue(displayPrice.toFixed(2));
    }
  }

  updateItemPrice() {
    if (this.editItemPriceForm.valid && this.itemPriceID !== undefined) {
      // Enable the displayPrice field before submitting
      this.editItemPriceForm.get('displayPrice')?.enable();
  
      const updatedItemPrice: ItemPrice = {
        itemPriceID: this.itemPriceID,
        ...this.editItemPriceForm.value
      };
  
      this.crudService.updateItemPrice(updatedItemPrice).subscribe(
        (response) => {
          console.log('Item Price updated successfully:', response);
          this.navigateToItemPriceList();
        },
        (error) => {
          console.error('Error updating Item Price:', error);
        }
      );
    } else {
      console.error('Form is invalid or ItemPriceID is undefined');
    }
  }
  

  navigateToItemPriceList() {
    this.router.navigate(['/allitemprice']);
  }
}
