import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ItemType } from 'src/app/Models/ItemType';
import { CRUDService } from 'src/app/Services/crud.service'; 

@Component({
  selector: 'app-additem',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
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
      itemPriceID:[null, Validators.required],
      shortDescription: ['', Validators.required],
      itemOrder: [null, [Validators.required, Validators.min(1)]],
      animationUrl: ['', Validators.required],
      pageID: [null, Validators.required],
      combiID: [null, Validators.required],
      name: [null, Validators.required],
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
        console.error('Error fetching menu pages', error);
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
      itemData.name = Number(itemData.name);
      this.crudService.addItem(itemData).subscribe(
        response => {
          console.log('Item added successfully', response);
        },
        error => {
          console.error('Error adding item', error);
        }
      );
    }
  }
}
