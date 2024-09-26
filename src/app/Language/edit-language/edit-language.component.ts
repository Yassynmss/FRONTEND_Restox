import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CRUDService } from 'src/app/Services/crud.service'; // Mettre à jour le chemin si nécessaire
import { Language } from 'src/app/Models/language'; // Mettre à jour le chemin si nécessaire

@Component({
  selector: 'app-edit-language',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './edit-language.component.html',
  styleUrls: ['./edit-language.component.css']
})
export class EditLanguageComponent implements OnInit {
  editLanguageForm: FormGroup;
  languageID?: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private crudService: CRUDService
  ) {
    this.editLanguageForm = this.fb.group({
      shortDescription: [null, [Validators.required, Validators.maxLength(50)]],
      isoCode: [{ value: null, disabled: true }], // isoCode désactivé, car il est auto-généré
      displayCode: [{ value: null, disabled: true }] // displayCode également désactivé
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.languageID = +id;
        this.getLanguage();
      } else {
        console.error('Aucun ID de langue trouvé dans la route');
      }
    });
  }

  getLanguage() {
    if (this.languageID !== undefined) {
      this.crudService.getLanguageById(this.languageID).subscribe(
        (data: Language) => {
          this.editLanguageForm.patchValue(data);
        },
        (error) => {
          console.error('Erreur lors de la récupération de la langue:', error);
        }
      );
    } else {
      console.error('ID de langue indéfini. Impossible de récupérer la langue.');
    }
  }

  updateLanguage() {
    if (this.editLanguageForm.valid && this.languageID !== undefined) {
      // Activer les champs avant soumission
      this.editLanguageForm.get('isoCode')?.enable();
      this.editLanguageForm.get('displayCode')?.enable();

      const updatedLanguage: Language = {
        languageID: this.languageID,
        ...this.editLanguageForm.value
      };

      this.crudService.updateLanguage(updatedLanguage).subscribe(
        (response) => {
          console.log('Langue mise à jour avec succès:', response);
          this.navigateToLanguageList();
        },
        (error) => {
          console.error('Erreur lors de la mise à jour de la langue:', error);
        }
      );
    } else {
      console.error('Le formulaire est invalide ou l’ID de langue est indéfini');
    }
  }

  navigateToLanguageList() {
    this.router.navigate(['/alllanguages']);
  }
}
