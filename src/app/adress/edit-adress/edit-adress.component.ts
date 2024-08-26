import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CRUDService } from 'src/app/Services/crud.service';
import { adress } from 'src/app/Models/adress';

@Component({
  selector: 'app-edit-adress',
  templateUrl: './edit-adress.component.html',
  styleUrls: ['./edit-adress.component.css']
})
export class EditAdressComponent implements OnInit {
  adress: adress = {
    adressID: 0,
    line1: '',
    line2: '',
    ville: ''
  };

  constructor(
    private adressService: CRUDService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    
    // Fetch the address data based on the ID from the URL
    this.adressService.getAdressById(id).subscribe((data) => {
      this.adress = data;
    }, (error) => {
      console.error('Error fetching address:', error);
      // Handle error appropriately (e.g., show a message or navigate back to the list)
    });
  }

  onSubmit(): void {
    // Call the edit address service method to update the address
    this.adressService.editAdress(this.adress.adressID!, this.adress).subscribe(() => {
      this.router.navigate(['/adress-list']); // Redirect to the address list after successful edit
    }, (error) => {
      console.error('Error updating address:', error);
      // Handle error appropriately here (e.g., show an error message to the user)
    });
  }
}
