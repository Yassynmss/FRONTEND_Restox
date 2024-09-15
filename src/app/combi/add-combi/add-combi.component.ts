import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-add-combi',
  templateUrl: './add-combi.component.html',
  styleUrls: ['./add-combi.component.css']
})
export class AddCombiComponent implements OnInit {
  combiForm: FormGroup;
  menuPages: any[] = []; // Pour stocker les pages récupérées

  constructor(private fb: FormBuilder, private combiService: CRUDService, private router: Router) {
    this.combiForm = this.fb.group({
      pageID: [null, Validators.required], // Corrected name to pageID
      combiCode: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      discount: [0, [Validators.required, Validators.min(0)]],
      displayPrice: [{ value: 0, disabled: true }, Validators.required]
    });

    this.combiForm.get('displayPrice')!.disable(); // Désactive le champ

    this.combiForm.get('price')!.valueChanges.subscribe(price => {
      this.updateDisplayPrice();
    });

    this.combiForm.get('discount')!.valueChanges.subscribe(discount => {
      this.updateDisplayPrice();
    });
  }

  ngOnInit() {
    this.getMenuPages(); // Récupérer les pages disponibles au chargement du composant
    this.generateCombiCode(); // Generate the combi code when the component is initialized
  }

  getMenuPages() {
    this.combiService.getMenuPages().subscribe(
      data => {
        this.menuPages = data; // Stocker les pages récupérées
      },
      error => {
        console.error('Error fetching menu pages', error);
      }
    );
  }

  updateDisplayPrice() {
    const price = this.combiForm.get('price')!.value;
    const discount = this.combiForm.get('discount')!.value;
    const displayPrice = price - (price * (discount / 100));
    this.combiForm.get('displayPrice')!.setValue(displayPrice);
  }

  generateCombiCode() {
    // Generate a random combi code. Adjust the logic as needed.
    const randomString = Math.random().toString(36).substring(2, 8).toUpperCase();
    const combiCode = `COMBI-${randomString}`;
    this.combiForm.get('combiCode')!.setValue(combiCode);
  }

  onSubmit() {
    if (this.combiForm.valid) {
      // Generate combiCode before form submission, if needed
      // This line is optional because the code is already generated in ngOnInit
      // const generatedCombiCode = this.generateCombiCode();
      // this.combiForm.get('combiCode')!.setValue(generatedCombiCode);

      const combiData = this.combiForm.getRawValue(); 
      this.combiService.addCombi(combiData).subscribe(
        response => {
          this.router.navigate(['/allcombi']);
          console.log('Combi added successfully', response);
        },
        error => {
          console.error('Error adding combi', error);
        }
      );
    }
  }
}
