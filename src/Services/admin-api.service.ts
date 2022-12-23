import { NewAdmin } from './../app/Models/new-admin';
import { AdminLogin } from './../app/Models/admin-login';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  private httpOptions = {};

  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': token
      })
    };

  }


  // getAllPrds(): Observable<IProduct[]> {
  //   return this.httpClient.get<IProduct[]>(`${environment.APIUrl}/products`);
  // }

  // getCatProducts(catId: number): Observable<IProduct[]> {
  //   return this.httpClient.get<IProduct[]>(`${environment.APIUrl}/products?catID=${catId}`)

  // }

  // getProductByID(prdID: number): Observable<IProduct> {
  //   return this.httpClient.get<IProduct>(`${environment.APIUrl}/products/${prdID}`)
  // }


  addAdmin(admin: NewAdmin): Observable<NewAdmin> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(admin);
    return this.httpClient.post<NewAdmin>(`${environment.APIUrl}/admins`, body, { 'headers': headers })
  }

  loginAdmin(admin: AdminLogin): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(admin);
    return this.httpClient.post<AdminLogin>(`${environment.APIUrl}/admins/login`, body, { 'headers': headers })
  }

  // deleteProductByID(prdID: number) {
  //   return this.httpClient.delete(`${environment.APIUrl}/products/${prdID}`)
  // }



  // updateProductByID(prdID: number, prd: IProduct) {
  //   const body = JSON.stringify(prd);

  //   return this.httpClient.put(`${environment.APIUrl}/products/${prdID}`, body, this.httpOptions)
  // }


}
