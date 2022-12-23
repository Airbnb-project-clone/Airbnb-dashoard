import { environment } from './../environments/environment';
import { IPlace } from './../app/Models/i-place';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TempUnitApiService {



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

  getAllUnits(): Observable<IPlace[]> {
    return this.httpClient.get<IPlace[]>(`${environment.APIUrl}/tempUnits/all`, this.httpOptions);
  }

  getUnitByID(unitID: any): Observable<IPlace> {
    return this.httpClient.get<IPlace>(`${environment.APIUrl}/tempUnits/${unitID}`, this.httpOptions)
  }

  deleteUnit(placeID: string) {
    return this.httpClient.delete(`${environment.APIUrl}/tempUnits/${placeID}`, this.httpOptions)
  }

}
