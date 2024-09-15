import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CRUDService } from 'src/app/Services/crud.service'; // Update the path as needed
import { Language } from 'src/app/Models/language'; // Update the path as needed
import { MenuPage } from 'src/app/Models/MenuPage';
import { ItemDetail } from 'src/app/Models/itemDetail';

@Component({
  selector: 'app-edit-item-detail',
  standalone: true,
  imports: [CommonModule, RouterModule , ReactiveFormsModule],
  templateUrl: './edit-item-detail.component.html',
  styleUrls: ['./edit-item-detail.component.css']
})
export class EditItemDetailComponent implements OnInit {
  editItemDetailForm: FormGroup;
  itemDetailID?: number;
  Language: Language[] = []; // Define Language property
  MenuPage: MenuPage[] = []; // Define MenuPage property

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private crudService: CRUDService
  ) {
    this.editItemDetailForm = this.fb.group({
      itemID: [null, Validators.required],
      languageID: [null, Validators.required],
      description: ['', Validators.required],
      htmlDescription: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.itemDetailID = +id;
        this.getItemDetail();
      } else {
        console.error('No Item Detail ID found in route');
      }
    });

    this.loadLanguages();
    this.loadMenuPages();
  }

  getItemDetail() {
    if (this.itemDetailID !== undefined) {
      this.crudService.getItemDetailById(this.itemDetailID).subscribe(
        (data: ItemDetail) => {
          this.editItemDetailForm.patchValue(data);
        },
        (error) => {
          console.error('Error fetching Item Detail:', error);
        }
      );
    } else {
      console.error('Item Detail ID is undefined. Cannot fetch Item Detail.');
    }
  }

  loadLanguages() {
    this.crudService.getAllLanguages().subscribe(
      (languages: Language[]) => {
        this.Language = languages;
      },
      (error) => {
        console.error('Error fetching languages:', error);
      }
    );
  }

  loadMenuPages() {
    this.crudService.getAllMenuPage().subscribe(
      (menuPages: MenuPage[]) => {
        this.MenuPage = menuPages;
      },
      (error) => {
        console.error('Error fetching menu pages:', error);
      }
    );
  }

  updateItemDetail() {
    if (this.editItemDetailForm.valid && this.itemDetailID !== undefined) {
      const updatedItemDetail: ItemDetail = {
        itemDetailID: this.itemDetailID,
        ...this.editItemDetailForm.value
      };
      this.crudService.updateItemDetail(updatedItemDetail).subscribe(
        (response) => {
          console.log('Item Detail updated successfully:', response);
          this.navigateToItemDetailsList();
        },
        (error) => {
          console.error('Error updating Item Detail:', error);
        }
      );
    } else {
      console.error('Form is invalid or ItemDetailID is undefined');
    }
  }

  navigateToItemDetailsList() {
    this.router.navigate(['/getallitemdetail']);
  }
}
