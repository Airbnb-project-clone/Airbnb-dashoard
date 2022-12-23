import { PlaceApiService } from './../../../Services/place-api.service';
import { TempUnitApiService } from './../../../Services/temp-unit-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hosting-details',
  templateUrl: './hosting-details.component.html',
  styleUrls: ['./hosting-details.component.scss']
})
export class HostingDetailsComponent implements OnInit {
  form: FormGroup
  advantages: Array<any> = [
    { title: "واي فاي", icon: 'bi bi-wifi' },
    { title: "التلفاز", icon: "bi bi-tv" },
    { title: "مطبخ", icon: "fa-solid fa-kitchen-set" },
    { title: "غسالة", icon: "bi bi-train-lightrail-front" },
    { title: "مواقف سيارات مجانية", icon: "bi bi-truck-front" },
    { title: "مواقف سيارات مدفوعة", icon: "bi bi-cash-coin" },
    { title: "مكيف", icon: "bi bi-snow" },
    { title: "مساحة مخصصة للعمل", icon: 'bi bi-person-workspace' },
  ];


  ArabicUnit: any = {
    location: {},
    advantages: []
  }
  ll: any = []

  tempUnit: any = {}
  tempUnitID: any
  imgs: any = ["https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/dd489167-14b9-464e-a291-e8390519b1dc.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/458c1368-f535-4d3d-a581-5c1c2a75ea01.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/d16d1f1b-c208-43d7-b907-aeddfe8c8804.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/17169b97-d647-4b7e-a953-469f36bcb1c7.jpeg?im_w=720"]


  constructor(private tempAPI: TempUnitApiService, private placeAPI: PlaceApiService, private router: Router, private activedroute: ActivatedRoute, fb: FormBuilder) {

    this.form = fb.group({
      selectedCountries: new FormArray([])
    });
  }

  onCheckboxChange(event: any) {

    const selectedCountries = (this.form.controls['selectedCountries'] as FormArray);
    if (event.target.checked) {
      selectedCountries.push(new FormControl(event.target.value))
      this.advantages.forEach(ad => {

        if (event.target.value === ad.title) {
          this.ArabicUnit.advantages.push(ad)
        }
      })
      // this.ll.push(event.target.value)
    } else {
      const index = selectedCountries.controls
        .findIndex(x => x.value === event.target.value);
      selectedCountries.removeAt(index);
    }
  }



  ngOnInit(): void {

    this.activedroute.paramMap.subscribe(paramMap => {
      this.tempUnitID = paramMap.get('tempID')
      console.log(this.tempUnitID);

      this.tempAPI.getUnitByID(this.tempUnitID!).subscribe({
        next: (res) => {
          console.log(res);
          this.tempUnit = res

        },
        error: (err) => {
          alert("Unable to Delete Temp Unit")
          console.log(err);
        }
      })
    })
  }



  Publish() {
    console.log(this.ArabicUnit);
    console.log(this.form.value);

    const place = {
      ArabicUnit: this.ArabicUnit,
      EnglishUnit: {
        title: this.tempUnit.title,
        description: this.tempUnit.description,
        location: this.tempUnit.location,
        unitType: this.tempUnit.unitType,
        placeType: this.tempUnit.placeType,
        advantages: this.tempUnit.advantages
      },
      date: this.tempUnit.date,
      pricePerNight: this.tempUnit.pricePerNight,
      guestsNumber: this.tempUnit.guestsNumber,
      images: this.imgs,
      host: this.tempUnit.host?._id,
      hostLang: this.tempUnit.hostLang,
      catName: this.tempUnit.catName,
      bedrooms: this.tempUnit.bedrooms,
      bathrooms: this.tempUnit.bathrooms,
      beds: this.tempUnit.beds,

    }

    console.log(place);
    console.log(this.ll);

    this.placeAPI.addPlace(place).subscribe({
      next: (res) => {
        console.log(res);
        alert("new Unit published")
        this.router.navigate(['/hosting']);
      },
      error: (err) => {
        alert("Unable to publish new Unit")
        console.log(err);
      }
    })
  }



  delete(tempUnitid: any) {

    this.tempUnitID = tempUnitid
  }


  confirm() {

    console.log(this.tempUnitID);
    this.tempAPI.deleteUnit(this.tempUnitID!).subscribe({

      next: (res) => {
        console.log(res);
        this.ngOnInit();
        this.router.navigate(['/hosting']);
      },
      error: (err) => {
        if (err) {
          alert("Unable to Delete Temp Unit")
        }
      }

    })

  }
}
