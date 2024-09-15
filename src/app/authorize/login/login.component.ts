import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BizAccountService } from 'src/app/Services/biz-account.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private bizAccountService: BizAccountService,
    private cookieService: CookieService
  ) {
    this.loginForm = this.fb.group({
      pseudo: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials = {
        pseudo: this.loginForm.value.pseudo,
        password: this.loginForm.value.password
      };

      this.bizAccountService.login(credentials).subscribe(
        (response: any) => {
          // Save the token in cookies
          this.cookieService.set('authToken', response.token);
          // Redirect to another page after successful login
          this.router.navigate(['']); // Adjust the route as needed
        },
        (error) => {
          console.error('Login failed:', error);
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }
}
