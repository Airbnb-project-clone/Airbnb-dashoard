import { TempUnitApiService } from './../../../Services/temp-unit-api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hosting',
  templateUrl: './hosting.component.html',
  styleUrls: ['./hosting.component.css']
})
export class HostingComponent implements OnInit {

  tempUnits: any = []
  tempUnitID: string = ''
  constructor(private tempAPI: TempUnitApiService, private router: Router) { }

  ngOnInit(): void {
    this.tempAPI.getAllUnits().subscribe(tempUnit => {
      this.tempUnits = tempUnit

      console.log(this.tempUnits);

    })
  }
  delete(tempUnitid: any) {
    console.log(tempUnitid);
    console.log(this.tempUnits);

    this.tempUnitID = tempUnitid

  }

  openDetails(tempUnitid: any) {
    this.router.navigate(['hostDetails', tempUnitid])
  }


  confirm() {

    console.log(this.tempUnitID);
    this.tempAPI.deleteUnit(this.tempUnitID!).subscribe({

      next: (res) => {
        console.log(res);
        this.ngOnInit();
      },
      error: (err) => {
        if (err) {
          alert("Unable to Delete Temp Unit")
        }
      }

    })

  }
}
