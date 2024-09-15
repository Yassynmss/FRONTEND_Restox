import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CRUDService } from 'src/app/Services/crud.service'; // Replace with the correct path to your CRUD service
import { Currency } from 'src/app/Models/currency'; // Replace with the correct path to your Currency model
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-currency',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './getall-currency.component.html',
  styleUrls: ['./getall-currency.component.css']
})
export class GetallCurrencyComponent implements OnInit {
  currencyList: Currency[] = []; // Initialize an empty array for currency list

  constructor(private crudService: CRUDService, private router: Router) {}

  ngOnInit() {
    this.loadCurrencies();
  }

  loadCurrencies() {
    this.crudService.getAllCurrencies().subscribe(
      (data: Currency[]) => {
        this.currencyList = data;
      },
      (error) => {
        console.error('Error fetching currencies:', error);
      }
    );
  }

  editCurrency(currency: Currency) {
    // Navigate to the edit page with the currency ID
    this.router.navigate(['/editcurrency', currency.currencyID]);
  }

  deleteCurrency(currencyID: number) {
    this.crudService.deleteCurrency(currencyID).subscribe(
      () => {
        console.log('Currency deleted successfully');
        // Reload the currency list after deletion
        this.loadCurrencies();
      },
      (error) => {
        console.error('Error deleting currency:', error);
      }
    );
  }
}
