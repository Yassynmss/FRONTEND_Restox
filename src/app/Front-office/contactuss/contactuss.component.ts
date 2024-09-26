import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactuss',
  templateUrl: './contactuss.component.html',
  styleUrls: ['../../../assets/css/style-starter.css']
})
export class ContactussComponent {
  ContactItem: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.ContactItem = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]] , // Assurez-vous d'ajouter une validation de motif ici
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.ContactItem.valid) {
      this.http.post('https://localhost:7176/api/EmailModel/send', this.ContactItem.value)
        .subscribe(response => {
          console.log(response);
          Swal.fire({
            title: 'Succès!',
            text: 'Votre e-mail a été envoyé avec succès.',
            icon: 'success',
            confirmButtonText: 'OK'
          });

          this.ContactItem.reset();
        }, error => {
          console.error('Error sending email', error);
          Swal.fire({
            title: 'Succès!',
            text: 'Votre e-mail a été envoyé avec succès.',
            icon: 'success',
            confirmButtonText: 'OK'
          });
        });
    } else {
      Swal.fire({
        title: 'Erreur!',
        text: 'Veuillez remplir tous les champs requis.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    }
  }
}
