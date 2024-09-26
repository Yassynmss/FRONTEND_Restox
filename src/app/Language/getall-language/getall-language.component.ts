import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-getall-language',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './getall-language.component.html',
  styleUrls: ['./getall-language.component.css']
})
export class GetallLanguageComponent implements OnInit {
  languageList: any[] = []; // Initialize an empty array for languages

  constructor(private crudService: CRUDService, private router: Router) {}

  ngOnInit() {
    this.loadLanguages();
  }

  loadLanguages() {
    this.crudService.getAllLanguages().subscribe(
      (data: any[]) => {
        this.languageList = data;
      },
      (error) => {
        console.error('Error fetching languages:', error);
      }
    );
  }

  editLanguage(language: any) {
    // Navigate to the edit page with the language ID
    this.router.navigate(['/editlanguage', language.languageID]);
  }

  deleteLanguage(languageID: number) {
    this.crudService.deleteLanguage(languageID).subscribe(
      () => {
        console.log('Language deleted successfully');
        // Reload the language list after deletion
        this.loadLanguages();
      },
      (error) => {
        console.error('Error deleting language:', error);
      }
    );
  }
}
