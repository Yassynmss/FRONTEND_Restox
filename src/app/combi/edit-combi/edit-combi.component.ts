import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CRUDService } from 'src/app/Services/crud.service';
import { Combi } from 'src/app/Models/combi';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-combi',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './edit-combi.component.html',
  styleUrls: ['./edit-combi.component.css']
})
export class EditCombiComponent implements OnInit {
  editCombiForm: FormGroup;
  combiID?: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private crudService: CRUDService
  ) {
    this.editCombiForm = this.fb.group({
      pageID: [null, Validators.required],
      combiCode: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      discount: [0, [Validators.required, Validators.min(0)]],
      displayPrice: [{ value: 0, disabled: true }, Validators.required]
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.combiID = +id;
        this.getCombiDetails();
      } else {
        console.error('No combi ID found in route');
      }
    });

    // Subscribe to changes in price and discount fields
    this.editCombiForm.get('price')?.valueChanges.subscribe(() => this.updateDisplayPrice());
    this.editCombiForm.get('discount')?.valueChanges.subscribe(() => this.updateDisplayPrice());
  }

  getCombiDetails() {
    if (this.combiID !== undefined) {
      this.crudService.getCombiById(this.combiID).subscribe(
        (data) => {
          this.editCombiForm.patchValue(data);
        },
        (error) => {
          console.error('Error fetching combi details:', error);
        }
      );
    } else {
      console.error('Combi ID is undefined. Cannot fetch combi details.');
    }
  }

  updateDisplayPrice() {
    const price = this.editCombiForm.get('price')?.value || 0;
    const discount = this.editCombiForm.get('discount')?.value || 0;
    const displayPrice = price - (price * (discount / 100));
    this.editCombiForm.get('displayPrice')?.setValue(displayPrice, { emitEvent: false });
  }

  updateCombi() {
    if (this.editCombiForm.valid && this.combiID !== undefined) {
      this.editCombiForm.get('displayPrice')?.enable();
      const updatedCombi: Combi = {
        combiID: this.combiID,
        ...this.editCombiForm.value
      };
      this.crudService.updateCombi(updatedCombi).subscribe(
        (response) => {
          console.log('Combi updated successfully:', response);
          this.navigateToAllCombis();
        },
        (error) => {
          console.error('Error updating combi:', error);
        }
      );
    } else {
      console.error('Form is invalid or combiID is undefined');
    }
  }

  navigateToAllCombis() {
    this.router.navigate(['/allcombi']);
  }
}
