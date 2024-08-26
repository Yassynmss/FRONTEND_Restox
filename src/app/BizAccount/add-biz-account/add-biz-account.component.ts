import { Component, OnInit } from '@angular/core';

import { CRUDService } from 'src/app/Services/crud.service';
import { Router } from '@angular/router';
import { adress } from 'src/app/Models/adress';
import { BizAccount } from 'src/app/Models/BizAccount';

@Component({
  selector: 'app-add-biz-account',
  templateUrl: './add-biz-account.component.html',
  styleUrls: ['./add-biz-account.component.css']
})
export class AddBizAccountComponent implements OnInit {
  newAccount: BizAccount = {};
  availableAdresses: adress[] = [];

  constructor(private crudService: CRUDService, private router: Router) {}

  ngOnInit(): void {
    // Charger toutes les adresses disponibles
    this.crudService.getAdresses().subscribe(
      (data: adress[]) => {
        this.availableAdresses = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des adresses :', error);
      }
    );
  }

  addAccount(): void {
    this.crudService.addBizAccount(this.newAccount).subscribe(
      () => {
        console.log('Account ajouté avec succès');
        this.router.navigate(['/list-biz-accounts']); // Redirige vers la liste des comptes
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du compte :', error);
      }
    );
  }
}
