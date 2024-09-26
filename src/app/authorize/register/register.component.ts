import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
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
      role: ['', Validators.required],
      addresses: this.fb.array([]) , // Empty initially
      photo: [null]
    });
  }

  createAddressGroup(): FormGroup {
    return this.fb.group({
      line1: ['', Validators.required],
      line2: [''],
      ville: ['', Validators.required]
    });
  }

  get addresses(): FormArray {
    return this.registerForm.get('addresses') as FormArray;
  }

  addAddress() {
    this.addresses.push(this.createAddressGroup());
  }

  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }

 onSubmit() {
  if (this.registerForm.valid) {
    const formValues = this.registerForm.value;
    const formData = new FormData();

    formData.append('pseudo', formValues.pseudo);
    formData.append('organization', formValues.organization);
    formData.append('password', formValues.password);
    formData.append('email', formValues.email);
    formData.append('phone', formValues.phone);
    formData.append('fullName', formValues.fullname);
    formData.append('isVerified', formValues.isVerified.toString());
    formData.append('isLocked', formValues.isLocked.toString());

    // Convert the role string to its corresponding enum value before appending
    const roleValue = this.getRoleEnum(formValues.role).toString();
    formData.append('role', roleValue);

    // Add addresses to FormData
    formValues.addresses.forEach((address: any, index: number) => {
      formData.append(`addresses[${index}].line1`, address.line1);
      formData.append(`addresses[${index}].line2`, address.line2 || '');
      formData.append(`addresses[${index}].ville`, address.ville);
    });

    // Add photo file if it exists
    if (this.registerForm.get('photo')?.value) {
      formData.append('photo', this.registerForm.get('photo')?.value);
    }

    // Call the register method in the service with FormData
    this.bizAccountService.register(formData).subscribe(
      () => {
        this.router.navigate(['/']); // Navigate to the desired route on success
      },
      (error) => {
        console.error('Registration failed', error); // Handle errors appropriately
      }
    );
  } else {
    console.log('Form is invalid');
  }
}
   
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.registerForm.patchValue({
        photo: file
      });
    }
  }
  
  getRoleEnum(role: string): number {
    switch (role) {
      case 'CUSTOMER': return 0;
      case 'RESTOWNER': return 1;
      case 'RESTOCHEF': return 2;
      case 'USER': return 3;
      default: return 0;
    }
  }
}
