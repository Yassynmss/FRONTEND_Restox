import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactuss',
  templateUrl: './contactuss.component.html',
  styleUrls: ['../../../assets/css/style-starter.css']
})
export class ContactussComponent {
  ContactItem: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.ContactItem = this.fb.group({
      emailModelID:0,
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.http.post('https://localhost:7176/api/EmailModel/send', this.ContactItem.value)
      .subscribe(response => {
        console.log('Email sent successfully', response);
      }, error => {
        console.error('Error sending email', error);
      });
  }
}
