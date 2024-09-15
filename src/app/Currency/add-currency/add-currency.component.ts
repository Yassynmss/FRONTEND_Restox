import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Currency } from 'src/app/Models/currency';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-add-currency',
  templateUrl: './add-currency.component.html',
  styleUrls: ['./add-currency.component.css']
})
export class AddCurrencyComponent {
  currencyForm: FormGroup;
  moneyCodes = ['Dollar', 'Euro', 'Tunisian Dinar'];

  constructor(private fb: FormBuilder, private router: Router, private currencyService: CRUDService) {
    this.currencyForm = this.fb.group({
      shortDescription: ['', Validators.required],
      moneyCode: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.currencyForm.valid) {
      const newCurrency: Currency = {
        currencyID: 0, // ID can be set by the backend
        shortDescription: this.currencyForm.value.shortDescription,
        moneyCode: this.currencyForm.value.moneyCode
      };

      this.currencyService.addCurrency(newCurrency).subscribe(() => {
        this.router.navigate(['/allcurrencies']); // Navigate to the currencies list or any other page
      });

      console.log('Currency added:', newCurrency); // Remove this in production
    } else {
      console.log('Form is not valid');
    }
  }
}
