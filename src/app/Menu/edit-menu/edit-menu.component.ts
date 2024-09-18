import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CRUDService } from 'src/app/Services/crud.service'; // Update the path as needed

@Component({
  selector: 'app-edit-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent implements OnInit {
  editMenuForm: FormGroup;
  menuID?: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private crudService: CRUDService
  ) {
    this.editMenuForm = this.fb.group({
      title: [null, [Validators.required]],
      htmlDescription: [null, [Validators.required]],
      applicationUserFullName: [{ value: null, disabled: true }] // Disabled field as it's not editable
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.menuID = +id;
        this.getMenu();
      } else {
        console.error('No Menu ID found in route');
      }
    });
  }

  getMenu() {
    if (this.menuID !== undefined) {
      this.crudService.getMenuById(this.menuID).subscribe(
        (data: any) => {
          this.editMenuForm.patchValue(data);
        },
        (error) => {
          console.error('Error fetching Menu:', error);
        }
      );
    } else {
      console.error('Menu ID is undefined. Cannot fetch Menu.');
    }
  }

  updateMenu() {
    if (this.editMenuForm.valid && this.menuID !== undefined) {
      const updatedMenu = {
        menuID: this.menuID,
        ...this.editMenuForm.value
      };

      this.crudService.updateMenu(updatedMenu).subscribe(
        (response) => {
          console.log('Menu updated successfully:', response);
          this.navigateToMenuList();
        },
        (error) => {
          console.error('Error updating Menu:', error);
        }
      );
    } else {
      console.error('Form is invalid or Menu ID is undefined');
    }
  }

  navigateToMenuList() {
    this.router.navigate(['/allmenus']);
  }
}
