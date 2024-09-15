import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-add-item-price',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-item-price.component.html',
  styleUrls: ['./add-item-price.component.css'],
})
export class AddItemPriceComponent implements OnInit {
  addItemPriceForm!: FormGroup;
  items: any[] = [];
  currencies: any[] = [];

  constructor(private fb: FormBuilder, private crudService: CRUDService, private router: Router) {} // Injection du Router

  ngOnInit() {
    this.addItemPriceForm = this.fb.group({
      itemID: ['', Validators.required],
      currencyID: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      discount: ['', [Validators.required, Validators.min(0)]],
      displayPrice: [{ value: '', disabled: true }, [Validators.required, Validators.min(0)]],
    });

    this.loadItems();
    this.loadCurrencies();

    this.addItemPriceForm.get('price')!.valueChanges.subscribe(() => this.updateDisplayPrice());
    this.addItemPriceForm.get('discount')!.valueChanges.subscribe(() => this.updateDisplayPrice());
  }

  loadItems() {
    this.crudService.getItems().subscribe((data: any) => {
      this.items = data;
    });
  }

  loadCurrencies() {
    this.crudService.getAllCurrencies().subscribe((data: any) => {
      this.currencies = data;
    });
  }

  updateDisplayPrice() {
    const price = this.addItemPriceForm.get('price')!.value;
    const discount = this.addItemPriceForm.get('discount')!.value;
    if (price !== null && discount !== null) {
      const displayPrice = price - (price * (discount / 100));
      this.addItemPriceForm.get('displayPrice')!.setValue(displayPrice.toFixed(2));
    }
  }

  addItemPrice() {
    if (this.addItemPriceForm.valid) {
      const formData = this.addItemPriceForm.getRawValue(); 
      this.crudService.addItemPrice(formData).subscribe(
        (response) => {
          console.log('Item Price added successfully');
        },
        (error) => {
          console.error('Error adding Item Price:', error);
        }
      );
    }
  }

  // Méthode pour rediriger vers la liste des prix d'articles
  cancel() {
    this.router.navigate(['/allitemprice']); // Rediriger vers le composant de liste des prix d'articles
  }
}