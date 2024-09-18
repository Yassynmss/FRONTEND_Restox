import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-add-menu-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-menu-page.component.html',
  styleUrls: ['./add-menu-page.component.css']
})
export class AddMenuPageComponent implements OnInit {
  addMenuPageForm!: FormGroup;
  menus: any[] = [];

  constructor(private fb: FormBuilder, private crudService: CRUDService, private router: Router) { 
    this.addMenuPageForm = this.fb.group({
      shortDescription: ['', Validators.required],
      htmlDescription: ['', Validators.required],
      pageOrder: ['', Validators.required],
      animationUrl: [''],
      menuID: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.getMenus();
  }

  getMenus() {
    this.crudService.getMenus().subscribe(
      data => {
        this.menus = data;
      },
      error => {
        console.error('Error fetching menus', error);
      }
    );
  }

  addMenuPage() {
    if (this.addMenuPageForm.valid) {
      const formData = this.addMenuPageForm.value;
      this.crudService.addMenuPage(formData).subscribe(
        (response) => {
          console.log('Menu page added successfully');
        },
        (error) => {
          console.error('Error adding menu page:', error);
        }
      );
    }
  }

  cancel() {
    this.router.navigate(['/allMenuPages']);
  }
}
