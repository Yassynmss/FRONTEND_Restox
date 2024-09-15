import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CRUDService } from 'src/app/Services/crud.service'; // Replace with the correct path to your CRUD service
import { Currency } from 'src/app/Models/currency'; // Replace with the correct path to your Currency model
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-currency',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './edit-currency.component.html',
  styleUrls: ['./edit-currency.component.css']
})
export class EditCurrencyComponent implements OnInit {
  editCurrencyForm: FormGroup;
  currencyID?: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private crudService: CRUDService
  ) {
    this.editCurrencyForm = this.fb.group({
      shortDescription: ['', Validators.required],
      moneyCode: ['', Validators.required],
      // Add other currency fields as needed
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.currencyID = +id;
        this.getCurrencyDetails();
      } else {
        console.error('No currency ID found in route');
      }
    });
  }

  getCurrencyDetails() {
    if (this.currencyID !== undefined) {
      this.crudService.getCurrencyById(this.currencyID).subscribe(
        (data: Currency) => {
          this.editCurrencyForm.patchValue(data);
        },
        (error) => {
          console.error('Error fetching currency details:', error);
        }
      );
    } else {
      console.error('Currency ID is undefined. Cannot fetch currency details.');
    }
  }

  updateCurrency() {
    if (this.editCurrencyForm.valid && this.currencyID !== undefined) {
      const updatedCurrency: Currency = {
        currencyID: this.currencyID,
        ...this.editCurrencyForm.value
      };
      this.crudService.updateCurrency(updatedCurrency).subscribe(
        (response) => {
          console.log('Currency updated successfully:', response);
          this.navigateToAllCurrencies();
        },
        (error) => {
          console.error('Error updating currency:', error);
        }
      );
    } else {
      console.error('Form is invalid or currencyID is undefined');
    }
  }

  navigateToAllCurrencies() {
    this.router.navigate(['/allcurrency']);
  }
}
