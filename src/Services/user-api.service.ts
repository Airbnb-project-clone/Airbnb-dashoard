import { IUser } from './../app/Models/i-user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  private httpOptions = {};
  token: string | null
  constructor(private httpClient: HttpClient) {
    this.token = localStorage.getItem('token')

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token!
      })
    };

  }

  getAllUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(`${environment.APIUrl}/users/all`, this.httpOptions);
  }

  // getCatProducts(catId: number): Observable<IProduct[]> {
  //   return this.httpClient.get<IProduct[]>(`${environment.APIUrl}/products?catID=${catId}`)

  // }

  // getProductByID(prdID: number): Observable<IProduct> {
  //   return this.httpClient.get<IProduct>(`${environment.APIUrl}/products/${prdID}`)
  // }






  deleteUser(userID: string) {
    return this.httpClient.delete(`${environment.APIUrl}/users/${userID}`, this.httpOptions)
  }



  // updateProductByID(prdID: number, prd: IProduct) {
  //   const body = JSON.stringify(prd);

  //   return this.httpClient.put(`${environment.APIUrl}/products/${prdID}`, body, this.httpOptions)
  // }

}
