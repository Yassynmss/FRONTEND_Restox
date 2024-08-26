import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { adress } from '../Models/adress';
import { BizAccount } from '../Models/BizAccount';
import { MenuPage } from '../Models/MenuPage';
import { Item } from '../Models/item';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {
  private baseUrl: string = 'https://localhost:7176/api'; // Correction de l'URL

  private addressSubject = new BehaviorSubject<string>("10001 Alleghany st, 5th Avenue, 235 Terry, London");
  currentAddress = this.addressSubject.asObservable();

  constructor(private http: HttpClient) { }

  AddAdress(adress: adress): Observable<adress> {
    console.log('Adresse envoyée :', adress);

    return this.http.post<adress>(`${this.baseUrl}/Adress`, adress, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      tap((response: adress) => {
        // Mettre à jour l'adresse actuelle après succès de la requête
        const formattedAddress = `${response.line1}, ${response.line2}, ${response.ville}`;
        this.changeAddress(formattedAddress);
      }),
      catchError(this.handleError) // Gestion des erreurs
    );
  }

  DeleteAdress(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/Adress/${id}`)
      .pipe(
        catchError(this.handleError) // Gestion des erreurs
      );
  }

  getAdresses(): Observable<adress[]> {
    return this.http.get<adress[]>(`${this.baseUrl}/Adress`);
  }
  

  changeAddress(address: string) {
    this.addressSubject.next(address);
  }

  // Fonction de gestion des erreurs
  private handleError(error: any) {
    console.error('Une erreur est survenue :', error);
    return throwError(error.message || 'Erreur serveur');
  }


  getAdressById(id: number): Observable<adress> {
    return this.http.get<adress>(`${this.baseUrl}/Adress/${id}`);
  }

  updateAdress(adress: adress): Observable<adress> {
    return this.http.put<adress>(`${this.baseUrl}/Adress/${adress.adressID}`, adress, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  editAdress(id: number, adress: adress): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/Adress/${id}`, adress);
  }

  addBizAccount(bizAccount: BizAccount): Observable<BizAccount> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<BizAccount>(`${this.baseUrl}/BizAccount`, bizAccount, { headers });
  }








  getMenuPages(): Observable<MenuPage[]> {
    return this.http.get<MenuPage[]>(this.baseUrl);
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.baseUrl}/Item`);
  }
}
