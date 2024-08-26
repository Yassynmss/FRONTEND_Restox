import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CRUDService } from '../../Services/crud.service'; 
import { Router } from '@angular/router';
import { adress } from '../../Models/adress'; 

@Component({
  selector: 'app-add-adress',
  templateUrl: './add-adress.component.html',
  styleUrls: ['./add-adress.component.css']
})
export class AddAdressComponent {
  adressForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private crudService: CRUDService, 
    private router: Router
  ) {
    this.adressForm = this.formBuilder.group({
     line1: [null, Validators.required],
      line2: [null],
      ville: [null, Validators.required],
    });
  }

  addAdress() {
    if (this.adressForm.valid) {
      const newAdress: adress = this.adressForm.value as adress;
      this.crudService.AddAdress(newAdress).subscribe(
        () => {
          // Redirection ou message de succès
          // this.router.navigate(['/adresses']);
        },
        error => {
          // Afficher l'erreur ou gérer l'erreur
          console.error('Erreur lors de l\'ajout de l\'adresse', error);
          alert('Une erreur est survenue. Veuillez réessayer.');
        }
      );
    } else {
      alert('Please fill out all the required fields.');
    }
  }
  
}
