import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-add-menu',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css'],
})
export class AddMenuComponent implements OnInit {
  addMenuForm!: FormGroup;
  bizaccounts: any[] = [];

  constructor(private fb: FormBuilder, private crudService: CRUDService, private router: Router) { 
    this.addMenuForm = this.fb.group({
      applicationUserId: ['', Validators.required],
      title: ['', Validators.required],
      htmlDescription: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.getRESTOCHEF();

  }
  getRESTOCHEF() {
    this.crudService.getRESTOCHEF().subscribe(
      data => {
        this.bizaccounts = data;
      },
      error => {
        console.error('Error fetching customers', error);
      }
    );
  }
  addMenu() {
    if (this.addMenuForm.valid) {
      const formData = this.addMenuForm.value;
      this.crudService.addMenu(formData).subscribe(
        (response) => {
          console.log('Menu added successfully');
        },
        (error) => {
          console.error('Error adding Menu:', error);
        }
      );
    }
  }

  cancel() {
    this.router.navigate(['/allmenu']);
  }
}
