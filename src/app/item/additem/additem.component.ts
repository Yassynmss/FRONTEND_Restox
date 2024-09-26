import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CRUDService } from 'src/app/Services/crud.service'; 
import { HttpClientModule } from '@angular/common/http'; // Pour les requêtes HTTP si nécessaire
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-additem',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, QRCodeModule, HttpClientModule],
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdditemComponent implements OnInit {
  itemForm: FormGroup;
  menuPages: any[] = [];
  combiList: any[] = [];
  itempriceList: any[] = [];
  itemTypes = [
    { value: 0, label: 'BREAKFAST' },
    { value: 1, label: 'LUNCH' },
    { value: 2, label: 'DINNER' }
  ];

  constructor(private fb: FormBuilder, private crudService: CRUDService) {
    this.itemForm = this.fb.group({
      itemPriceID: [null, Validators.required],
      shortDescription: ['', Validators.required],
      itemOrder: [null, [Validators.required, Validators.min(1)]],
      pageID: [null, Validators.required],
      combiID: [null, Validators.required],
      name: [null, Validators.required],
      imageFile: [null, Validators.required] // File upload field
    });
  }

  ngOnInit() {
    this.getMenuPages();
    this.getItemPrices();
    this.getCombiList();
  }

  getItemPrices() {
    this.crudService.getAllItemPrices().subscribe(
      data => {
        this.itempriceList = data;
      },
      error => {
        console.error('Error fetching item prices', error);
      }
    );
  }

  getMenuPages() {
    this.crudService.getMenuPages().subscribe(
      data => {
        this.menuPages = data;
      },
      error => {
        console.error('Error fetching menu pages', error);
      }
    );
  }

  getCombiList() {
    this.crudService.getCombiList().subscribe(
      data => {
        this.combiList = data;
      },
      error => {
        console.error('Error fetching combi list', error);
      }
    );
  }

  onSubmit() {
    if (this.itemForm.valid) {
      const itemData = this.itemForm.value;
      const formData = new FormData();
      for (const key in itemData) {
        if (itemData.hasOwnProperty(key)) {
          formData.append(key, itemData[key]);
        }
      }
      formData.set('name', Number(itemData.name).toString()); // Ensure 'name' is a number

      this.crudService.addItem(formData).subscribe(
        response => {
          console.log('Item added successfully', response);
        },
        error => {
          console.error('Error adding item', error);
        }
      );
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.itemForm.patchValue({
        imageFile: input.files[0]
      });
    }
  }
}
