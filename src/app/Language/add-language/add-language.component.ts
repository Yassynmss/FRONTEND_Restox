import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-add-language',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.css']
})
export class AddLanguageComponent implements OnInit {
  addLanguageForm!: FormGroup;

  constructor(private fb: FormBuilder, private crudService: CRUDService, private router: Router) {}

  ngOnInit() {
    this.addLanguageForm = this.fb.group({
      shortDescription: ['', Validators.required],
      isoCode: ['', Validators.required],
      displayCode: ['', Validators.required],
    });

    // Remplir le champ isoCode et displayCode à l'initialisation
    this.generateCodes();
  }

  generateCodes() {
    const randomDisplayCode = this.generateRandomCode(6); // Longueur pour displayCode
    const randomIsoCode = this.generateRandomCode(4).toUpperCase(); // Longueur pour isoCode, en majuscules

    this.addLanguageForm.patchValue({
      displayCode: randomDisplayCode,
      isoCode: randomIsoCode // Exemple de génération d'isoCode distinct
    });
  }

  generateRandomCode(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  addLanguage() {
    if (this.addLanguageForm.valid) {
      const formData = this.addLanguageForm.getRawValue();
      this.crudService.addLanguage(formData).subscribe(
        response => {
          console.log('Language added successfully');
          this.router.navigate(['/all-languages']); // Redirige vers la liste des langues
        },
        error => {
          console.error('Error adding Language:', error);
        }
      );
    }
  }

  cancel() {
    this.router.navigate(['/all-languages']); // Redirige vers la liste des langues
  }
}
