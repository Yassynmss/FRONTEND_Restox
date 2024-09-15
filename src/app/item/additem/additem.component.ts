import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  combiList: any[] = []; // Liste pour stocker les combinaisons

  constructor(private fb: FormBuilder, private crudService: CRUDService) {
    this.itemForm = this.fb.group({
      shortDescription: ['', Validators.required],
      itemOrder: [null, [Validators.required, Validators.min(1)]],
      animationUrl: ['', Validators.required],
      pageID: [null, Validators.required],
      combiID: [null, Validators.required] // Utiliser un nom unique
    });
  }

  ngOnInit() {
    this.getMenuPages();
    this.getCombiList(); // Récupérer les combinaisons disponibles
  }

  getMenuPages() {
    this.crudService.getMenuPages().subscribe(
      data => {
        this.menuPages = data; // Stocker les pages récupérées
      },
      error => {
        console.error('Error fetching menu pages', error);
      }
    );
  }

  getCombiList() {
    this.crudService.getCombiList().subscribe(
      data => {
        this.combiList = data; // Stocker les combinaisons récupérées
      },
      error => {
        console.error('Error fetching combi list', error);
      }
    );
  }

  onSubmit() {
    if (this.itemForm.valid) {
      const itemData = this.itemForm.value;
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
