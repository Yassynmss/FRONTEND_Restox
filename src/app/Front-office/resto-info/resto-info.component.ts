import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/Services/crud.service';
import { adress } from 'src/app/Models/adress';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resto-info',
  templateUrl: './resto-info.component.html',
  styleUrls: ['./resto-info.component.css']
})
export class RestoInfoComponent implements OnInit {
  addresses: adress[] = [];

  constructor(private crudService: CRUDService, private router: Router) {}

  ngOnInit(): void {
    this.crudService.getAdresses().subscribe(
      (data: adress[]) => {
        console.log(data);
        this.addresses = data;
        console.log('Adresses récupérées :', this.addresses);
        // Log each address to check for ID
        this.addresses.forEach(address => {
          console.log(`Address ID: ${address.adressID}`);
        });
      },
      (error) => {
        console.error('Erreur lors de la récupération des adresses :', error);
      }
    );
  }

  editAdress(adressID: number | undefined): void {
    if (adressID) {
      this.router.navigate(['/edit-adress', adressID]);
    }
  }
  
  deleteAdress(adressID: number | undefined): void {
    if (adressID) {
      this.crudService.DeleteAdress(adressID).subscribe(
        () => {
          // Supprimer l'adresse de la liste après la suppression réussie
          this.addresses = this.addresses.filter(a => a.adressID !== adressID);
          console.log(`Adresse avec ID ${adressID} supprimée.`);
        },
        (error) => {
          console.error('Erreur lors de la suppression de l\'adresse :', error);
        }
      );
    }
  
}
}
