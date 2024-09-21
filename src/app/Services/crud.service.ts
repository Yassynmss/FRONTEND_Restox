import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { adress } from '../Models/adress';
import { BizAccount } from '../Models/BizAccount';
import { MenuPage } from '../Models/MenuPage';
import { Item } from '../Models/item';
import { Combi } from '../Models/combi';
import { Currency } from '../Models/currency';
import { ItemDetail } from '../Models/itemDetail';
import { Language } from '../Models/language';
import { ItemPrice } from '../Models/itemPrice';
import { Order } from '../Models/order';
import { DeliveryType } from '../Models/DeliveryType';
import { DeliveryStatus } from '../Models/DeliveryStatus';
import { Customer } from '../Models/customer';
import { Role } from '../Models/Role';
import { OrderDetail } from '../Models/OrderDetail';
import { Menu } from '../Models/Menu';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {
  private baseUrl: string = 'https://localhost:7176/api'; 

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
  deleteCombi(id:number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/Combi/${id}`)
    .pipe(
      catchError(this.handleError) // Gestion des erreurs
    );
  }
  deleteCurrency(id:number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/Currency/${id}`)
    .pipe(
      catchError(this.handleError) // Gestion des erreurs
    );
  }
  deleteItemDetail(id:number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/ItemDetail/${id}`)
    .pipe(
      catchError(this.handleError) // Gestion des erreurs
    );
  }
  deleteOrderDetail(id:number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/OrderDetail/${id}`)
    .pipe(
      catchError(this.handleError) // Gestion des erreurs
    );
  }
  deleteItemPrice(id:number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/ItemPrice/${id}`)
    .pipe(
      catchError(this.handleError) 
    );
  }
  deleteOrder(id:number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/Order/${id}`)
    .pipe(
      catchError(this.handleError) 
    );
  }
  deleteMenu(id:number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/Menu/${id}`)
    .pipe(
      catchError(this.handleError) 
    );
  }
  getAdresses(): Observable<adress[]> {
    return this.http.get<adress[]>(`${this.baseUrl}/Adress`);
  }
  getAllCombis(): Observable<Combi[]>{
    return this.http.get<Combi[]>(`${this.baseUrl}/Combi`);
  }
  getOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(`${this.baseUrl}/Order`);
  }
  changeAddress(address: string) {
    this.addressSubject.next(address);
  }
  getAllMenus(): Observable<Menu[]>{
    return this.http.get<Menu[]>(`${this.baseUrl}/Menu/get-all-menus`);
  }
  // Fonction de gestion des erreurs
  private handleError(error: any) {
    console.error('Une erreur est survenue :', error);
    return throwError(error.message || 'Erreur serveur');
  }
  getMenuById(id: number): Observable<Menu> {
    return this.http.get<Menu>(`${this.baseUrl}/Menu/get-menu/${id}`);
  }
  getOrderDetailById(id: number): Observable<OrderDetail> {
    return this.http.get<OrderDetail>(`${this.baseUrl}/OrderDetail/${id}`);
  }
  getAdressById(id: number): Observable<adress> {
    return this.http.get<adress>(`${this.baseUrl}/Adress/${id}`);
  }
  getCurrencyById(id: number): Observable<Currency> {
    return this.http.get<Currency>(`${this.baseUrl}/Currency/${id}`);
  }
  getCombiById(combiID: number):Observable<Combi>{
    return this.http.get<Combi>(`${this.baseUrl}/Combi/${combiID}`);
  }
  getOrderById(orderID: number):Observable<Order>{
    return this.http.get<Order>(`${this.baseUrl}/Order/${orderID}`);
  }
  updateAdress(adress: adress): Observable<adress> {
    return this.http.put<adress>(`${this.baseUrl}/Adress/${adress.adressID}`, adress, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.baseUrl}/Order/${order.orderID}`, order, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  updateMenu(menu: Menu): Observable<Menu> {
    return this.http.put<Menu>(`${this.baseUrl}/Menu/${menu.menuID}`, menu, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  updateOrderDetail(order: OrderDetail): Observable<OrderDetail> {
    return this.http.put<OrderDetail>(`${this.baseUrl}/OrderDetail/${order.orderDetailID}`, order, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  updateCombi(combi: Combi): Observable<Combi>{
    return this.http.put<Combi>(`${this.baseUrl}/Combi/${combi.combiID}`, combi, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  updateCurrency(Currency: Currency): Observable<Combi>{
    return this.http.put<Combi>(`${this.baseUrl}/Combi/${Currency.currencyID}`, Currency, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  updateItemDetail(ItemDetail: ItemDetail): Observable<Combi>{
    return this.http.put<Combi>(`${this.baseUrl}/ItemDetail/${ItemDetail.itemDetailID}`, ItemDetail, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  updateItemPrice(ItemPrice: ItemPrice): Observable<Combi>{
    return this.http.put<Combi>(`${this.baseUrl}/ItemPrice/${ItemPrice.itemPriceID}`, ItemPrice, {
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


  getMenus(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/Menu`);
  }


  getCombiList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/combi`);
  }
  getAllCurrencies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/Currency`);
  }
  getAllItemPrices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/ItemPrice`);
  }
  getMenuPages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/menupage`);
  }
  
  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}/Order`);
  }
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.baseUrl}/Item`);
  }
  getAllItemDetails(): Observable<ItemDetail[]> {
    return this.http.get<ItemDetail[]>(`${this.baseUrl}/ItemDetail`);
  }
  getItemDetailById(ItemDetailID: number):Observable<ItemDetail>{
    return this.http.get<ItemDetail>(`${this.baseUrl}/ItemDetail/${ItemDetailID}`);
  }
  getItemPriceById(ItemPrice: number):Observable<ItemPrice>{
    return this.http.get<ItemDetail>(`${this.baseUrl}/ItemPrice/${ItemPrice}`);
  }
  addCombi(combi: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/combi`, combi);
}
addMenuPage(menupage: any):Observable<any>{
  return this.http.post(`${this.baseUrl}/MenuPage`, menupage);
}
addItem(item: any):Observable<any>{
  return this.http.post(`${this.baseUrl}/item`, item);
}
addCurrency(currency : any):Observable<any>{
  return this.http.post(`${this.baseUrl}/Currency`, currency);
}
addItemDetail(itemDetail : any):Observable<any>{
  return this.http.post(`${this.baseUrl}/ItemDetail`, itemDetail);
}
addItemPrice(itemPrice : any):Observable<any>{
  return this.http.post(`${this.baseUrl}/ItemPrice`, itemPrice);
}
addMenu(Menu : any):Observable<any>{
  return this.http.post(`${this.baseUrl}/Menu`, Menu);
}
getAllMenuPage(): Observable<MenuPage[]> {
  return this.http.get<MenuPage[]>(`${this.baseUrl}/MenuPage`);
}
getAllOrderDetails(): Observable<OrderDetail[]> {
  return this.http.get<OrderDetail[]>(`${this.baseUrl}/OrderDetail`);
}
// Method to get all languages
getAllLanguages(): Observable<Language[]> {
  return this.http.get<Language[]>(`${this.baseUrl}/Language`);
}
getAllItemss(): Observable<ItemPrice[]> {
  return this.http.get<ItemPrice[]>(`${this.baseUrl}/Item`);
}
getAllItems(): Observable<Item[]> {
  return this.http.get<Item[]>(`${this.baseUrl}/Item`);
}
getDeliveryTypes(): Observable<DeliveryType[]> {
  return this.http.get<DeliveryType[]>(`${this.baseUrl}/DeliveryType`);
}
getDeliveryStatuses(): Observable<DeliveryStatus[]> {
  return this.http.get<DeliveryStatus[]>(`${this.baseUrl}/DeliveryStatus`);
}

// Dans votre service CRUDService
getPaymentMethods() {
  return this.http.get<any[]>('/api/paymentmethods'); 
}

getCustomer(): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/auth/customers`)
    .pipe(
      catchError(this.handleError)
    );
}
getRESTOCHEF(): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/auth/restochefs`)
    .pipe(
      catchError(this.handleError)
    );
}















// Méthode pour ajouter une commande
addOrder(order: Order): Observable<Order> {
  return this.http.post<Order>(`${this.baseUrl}/Order`, order);
}
addOrderDetail(order: OrderDetail): Observable<OrderDetail> {
  return this.http.post<OrderDetail>(`${this.baseUrl}/OrderDetail`, order);
}

// Récupération des données automatiquement
getBizAccountID(): Observable<number> {
  return this.http.get<number>(`${this.baseUrl}/BizAccount`);
}

getCustomerID(): Observable<number> {
  return this.http.get<number>(`${this.baseUrl}/Customer`);
}

getDeliveryStatusID(): Observable<number> {
  return this.http.get<number>(`${this.baseUrl}/DeliveryStatus`);
}

getDeliveryTypeID(): Observable<number> {
  return this.http.get<number>(`${this.baseUrl}/DeliveryType`);
}
}
