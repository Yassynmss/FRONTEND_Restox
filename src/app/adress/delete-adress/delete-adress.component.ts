import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importer CommonModule
import { FormsModule } from '@angular/forms'; // Importer FormsModule
import { HttpClientModule } from '@angular/common/http'; // Importer HttpClientModule si nécessaire
import { CRUDService } from '../../Services/crud.service'; // Assurez-vous que le service est correctement importé

@Component({
  selector: 'app-delete-adress',
  templateUrl: './delete-adress.component.html',
  styleUrls: ['./delete-adress.component.css'],
  standalone: true, // Déclarez le composant comme standalone
  imports: [CommonModule, FormsModule, HttpClientModule] // Importez les modules nécessaires
})
export class DeleteAdressComponent {
  adressId?: number;

  constructor(private crudService: CRUDService) {}

  deleteAdress(): void {
    if (this.adressId !== undefined && this.adressId > 0) {
      this.crudService.DeleteAdress(this.adressId).subscribe({
        next: () => {
          console.log('Adresse supprimée avec succès');
          // Ajoutez ici la logique pour rediriger ou afficher un message
        },
        error: (error) => {
          console.error('Erreur lors de la suppression de l\'adresse:', error);
        }
      });
    }
  }

  cancel(): void {
    // Logique pour annuler l'opération ou réinitialiser l'ID
    this.adressId = undefined;
  }
}
