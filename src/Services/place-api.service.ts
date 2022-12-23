import { IPlace } from './../app/Models/i-place';
import { IUser } from './../app/Models/i-user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PlaceApiService {


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

  getAllPlaces(): Observable<IPlace[]> {
    return this.httpClient.get<IPlace[]>(`${environment.APIUrl}/units`, this.httpOptions);
  }

  addPlace(place: any): Observable<IPlace[]> {
    return this.httpClient.post<IPlace[]>(`${environment.APIUrl}/units`, place, this.httpOptions);
  }


  deletePlace(placeID: string) {
    return this.httpClient.delete(`${environment.APIUrl}/units/${placeID}`, this.httpOptions)
  }

}
