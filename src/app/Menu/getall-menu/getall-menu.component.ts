import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-getall-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './getall-menu.component.html',
  styleUrls: ['./getall-menu.component.css']
})
export class GetallMenuComponent implements OnInit {
  menuList: any[] = [];

  constructor(private crudService: CRUDService, private router: Router) {}

  ngOnInit() {
    this.loadMenus();
  }

  loadMenus() {
    this.crudService.getAllMenus().subscribe(
      (data: any[]) => {
        this.menuList = data;
      },
      (error) => {
        console.error('Error fetching menus:', error);
      }
    );
  }

  editMenu(menu: any) {
    this.router.navigate(['/editmenu', menu.menuID]);
  }

  deleteMenu(menuID: number) {
    this.crudService.deleteMenu(menuID).subscribe(
      () => {
        console.log('Menu deleted successfully');
        this.loadMenus(); // Reload the menu list after deletion
      },
      (error) => {
        console.error('Error deleting menu:', error);
      }
    );
  }
}
