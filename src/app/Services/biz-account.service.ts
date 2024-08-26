import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BizAccount } from '../Models/BizAccount';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BizAccountService {
  private baseUrl: string = 'https://localhost:7176/api'; // Correction de l'URL
  constructor(private http: HttpClient) { }

  
}
  

