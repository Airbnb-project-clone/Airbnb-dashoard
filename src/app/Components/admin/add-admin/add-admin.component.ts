import { AdminApiService } from './../../../../Services/admin-api.service';
import { NewAdmin } from './../../../Models/new-admin';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  admin: NewAdmin = {} as NewAdmin
  constructor(private adminAPI: AdminApiService) { }



  addAdmin(admin?: NewAdmin) {
    // this.admin = admin
    console.log(this.admin);
    this.adminAPI.loginAdmin(admin!).subscribe({
      next: (res) => {
        if (res.admin) {
          console.log(res);
          localStorage.setItem('token', res.token)

          alert('Admin logged in')
        } else {
          alert('cannot log in ')
        }
        // this.router.navigate()
      },
      error: (err) => {
        alert('Unable to Add new Admin ')
      }
    })
  }
  ngOnInit(): void {
  }



}
