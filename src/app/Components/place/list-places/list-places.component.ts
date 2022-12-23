import { IPlace } from './../../../Models/i-place';
import { PlaceApiService } from './../../../../Services/place-api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-places',
  templateUrl: './list-places.component.html',
  styleUrls: ['./list-places.component.css']
})
export class ListPlacesComponent implements OnInit {

  places: any = []
  placeID: string = ''
  constructor(private placeAPI: PlaceApiService, private router: Router) { }

  ngOnInit(): void {
    this.placeAPI.getAllPlaces().subscribe(places => {
      this.places = places

      console.log(this.places);

    })
  }
  deletePlace(placeid: any) {
    console.log(placeid);

    this.placeID = placeid

  }

  confirm() {

    console.log(this.placeID);
    this.placeAPI.deletePlace(this.placeID!).subscribe({

      next: (res) => {
        console.log(res);
        this.ngOnInit();
      },
      error: (err) => {
        if (err) {
          alert("Unable to Delete Unit")
        }
      }

    })
  }



}
