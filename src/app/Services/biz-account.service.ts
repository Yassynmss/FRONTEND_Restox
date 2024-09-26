import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BizAccount, login } from '../Models/BizAccount';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BizAccountService {
  private baseUrl: string = 'https://localhost:7176/api/auth';
  private isLoggedIn = false;

  constructor(private http: HttpClient) { }

 // Updated register method to accept FormData
 register(formData: FormData): Observable<any> {
  // Send FormData without headers to allow automatic boundary handling
  return this.http.post<any>(`${this.baseUrl}/register`, formData);
}

  login(credentials: login): Observable<any> {
    const url = `${this.baseUrl}/login`;
    return this.http.post<any>(url, credentials).pipe(
      tap(response => {
        if (response && response.token) {  // Supposons que l'API retourne un token
          localStorage.setItem('authToken', response.token);
          this.isLoggedIn = true;
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.isLoggedIn = false;
    window.location.href = '/login';
  }

  getLoginStatus(): boolean {
    return this.isLoggedIn || localStorage.getItem('authToken') !== null;
  }
}
