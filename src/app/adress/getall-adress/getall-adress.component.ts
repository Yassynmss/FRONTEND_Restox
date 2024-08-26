import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { adress } from 'src/app/Models/adress';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-getall-adress',
  templateUrl: './getall-adress.component.html',
  styleUrls: ['./getall-adress.component.css'],
  standalone: true,
  imports: [CommonModule] // Importer CommonModule ici
})
export class GetallAdressComponent implements OnInit {
  adresses: adress[] = [];
  errorMessage: string | null = null;

  constructor(private crudService: CRUDService) {}

  ngOnInit(): void {
    this.getAdresses();
  }

  getAdresses(): void {
    this.crudService.getAdresses().subscribe({
      next: (data) => {
        this.adresses = data;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des adresses:', error);
        this.errorMessage = 'Impossible de récupérer les adresses.';
      }
    });
  }
}
