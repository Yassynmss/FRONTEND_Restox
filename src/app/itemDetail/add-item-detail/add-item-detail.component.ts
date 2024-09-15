import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CRUDService } from 'src/app/Services/crud.service'; // Adjust the path as necessary
import { CommonModule } from '@angular/common';
import { MenuPage } from 'src/app/Models/MenuPage';
import { Language } from 'src/app/Models/language';

@Component({
  selector: 'app-add-item-detail',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './add-item-detail.component.html',
  styleUrls: ['./add-item-detail.component.css']
})
export class AddItemDetailComponent implements OnInit {
  addItemDetailForm: FormGroup;
MenuPage: MenuPage[] = [];
Language: Language[] = [];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private crudService: CRUDService
  ) {
    this.addItemDetailForm = this.fb.group({
      itemID: [null, Validators.required],
      languageID: [null, Validators.required],
      description: ['', Validators.required],
      htmlDescription: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadItems();
    this.loadLanguages();
  }
  loadItems() {
    this.crudService.getAllMenuPage().subscribe(
      (data: MenuPage[]) => {
        this.MenuPage = data;
      },
      (error) => {
        console.error('Error fetching items:', error);
      }
    );
  }

  loadLanguages() {
    this.crudService.getAllLanguages().subscribe(
      (data: Language[]) => {
        this.Language = data;
      },
      (error) => {
        console.error('Error fetching languages:', error);
      }
    );
  }
  addItemDetail() {
    if (this.addItemDetailForm.valid) {
      const itemDetail = this.addItemDetailForm.value;
      this.crudService.addItemDetail(itemDetail).subscribe(
        (response) => {
          console.log('ItemDetail added successfully:', response);
          this.navigateToItemDetailsList();
        },
        (error) => {
          console.error('Error adding ItemDetail:', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }

  navigateToItemDetailsList() {
    this.router.navigate(['/allitemdetail']);
  }
}
