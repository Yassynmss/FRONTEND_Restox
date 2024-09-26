import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/Services/crud.service'; // Ajustez le chemin en fonction de votre projet

@Component({
  selector: 'app-dashboard-resto',
  templateUrl: './dashboard-resto.component.html',
  styleUrls: ['../../../assets/css/style-starter.css'],
  
})
export class DashboardRestoComponent implements OnInit {
  customersCount: number = 0;
  chefsCount: number = 0;
  ordersCount: number = 0;

  constructor(private crudService: CRUDService) {}

  ngOnInit(): void {
    this.getCustomersCount();
    this.getChefsCount();
    this.getOrdersCount();
  }

  getCustomersCount() {
    this.crudService.getNumberOfUsersByType('CUSTOMER').subscribe(
      (count: number) => {
        this.customersCount = count;
      },
      (error) => {
        console.error('Error fetching customer count:', error);
      }
    );
  }
ngAfterViewInit() {
  const textElement = document.getElementById('animatedText');

  if (textElement) {  // Vérification que textElement n'est pas null
    const text = textElement?.textContent || '';
    textElement.textContent = '';

    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 70); // Apparition lettre par lettre chaque 100 ms
  } else {
    console.error("Element with id 'animatedText' not found.");
  }
}

  getChefsCount() {
    this.crudService.getNumberOfUsersByType('RESTOCHEF').subscribe(
      (count: number) => {
        this.chefsCount = count;
      },
      (error) => {
        console.error('Error fetching chefs count:', error);
      }
    );
  }

  getOrdersCount() {
    this.crudService.getTotalOrders().subscribe(
      (count: number) => {
        this.ordersCount = count;
      },
      (error) => {
        console.error('Error fetching orders count:', error);
      }
    );
  }
}
