import { IUser } from './../../../Models/i-user';
import { UserApiService } from './../../../../Services/user-api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: IUser[] = []
  userID: string = ''
  constructor(private userAPI: UserApiService, private router: Router) { }

  ngOnInit(): void {
    this.userAPI.getAllUsers().subscribe(users => {
      this.users = users
      console.log(this.users);

    })
  }
  deleteUser(userid: any) {
    this.userID = userid

  }

  confirm() {

    console.log(this.userID);
    this.userAPI.deleteUser(this.userID!).subscribe({

      next: (res) => {
        console.log(res);
        this.ngOnInit();
      },
      error: (err) => {
        alert("Unable to Delete User")

      }

    })
  }


}
