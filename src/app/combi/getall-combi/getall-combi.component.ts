import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CRUDService } from 'src/app/Services/crud.service'; // Replace with the correct path to your CRUD service
import { Combi } from 'src/app/Models/combi';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-getall-combi',
  standalone: true,
  imports: [CommonModule], // Add CommonModule to imports
  templateUrl: './getall-combi.component.html',
  styleUrls: ['./getall-combi.component.css']
})
export class GetallCombiComponent implements OnInit {
  combiList: Combi[] = []; // Initialize an empty array for combi list

  constructor(private crudService: CRUDService, private router: Router) {}

  ngOnInit() {
    this.loadCombis();
  }

  loadCombis() {
    this.crudService.getAllCombis().subscribe(
      (data: Combi[]) => {
        this.combiList = data;
      },
      (error) => {
        console.error('Error fetching combis:', error);
      }
    );
  }

  editCombi(combi: Combi) {
    // Navigate to the edit page with the combi ID
    this.router.navigate(['/editcombi', combi.combiID]);
  }

  deleteCombi(combiID: number) {
    this.crudService.deleteCombi(combiID).subscribe(
      () => {
        console.log('Combi deleted successfully');
        // Reload the combi list after deletion
        this.loadCombis();
      },
      (error) => {
        console.error('Error deleting combi:', error);
      }
    );
  }
  
}
