import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BizAccountService } from 'src/app/Services/biz-account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private bizAccountService: BizAccountService
  ) {
    this.registerForm = this.fb.group({
      pseudo: ['', Validators.required],
      organization: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      fullname: ['', [Validators.required]],
      isVerified: [false],
      isLocked: [false],
      role: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formValues = this.registerForm.value;

      const newBizAccount = {
        pseudo: formValues.pseudo,
        organization: formValues.organization,
        password: formValues.password,
        email: formValues.email,
        phone: formValues.phone,
        fullName: formValues.fullname,
        datCrea: new Date().toISOString(),  // Correspond à l'exemple de backend
        datUpt: new Date().toISOString(),
        isVerified: formValues.isVerified,
        isLocked: formValues.isLocked,
        roles: [
          { name: this.getRoleEnum(formValues.role) }  // Convertir le rôle en Enum
        ]
      };

      // Appel au service pour s'enregistrer
      this.bizAccountService.register(newBizAccount).subscribe(() => {
        this.router.navigate(['/']);  // Redirection après succès
      });

      console.log('Data envoyée:', newBizAccount);  // Debug: supprimer en production
    } else {
      console.log('Formulaire invalide');
    }
  }

  // Fonction pour convertir la chaîne de rôle en Enum
  getRoleEnum(role: string): number {
    switch (role) {
      case 'CUSTOMER': return 0;
      case 'RESTOWNER': return 1;
      case 'USER': return 2;
      default: return 0;  // Valeur par défaut si le rôle est inconnu
    }
  }
}
