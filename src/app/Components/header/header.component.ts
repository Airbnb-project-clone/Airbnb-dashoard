import { UserAuthService } from './../../../Services/user-auth.service';
import { AdminApiService } from './../../../Services/admin-api.service';
import { AdminLogin } from './../../Models/admin-login';
import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLog: boolean = false
  admin: AdminLogin = {} as AdminLogin
  constructor(private adminAPI: AdminApiService, private authorization: UserAuthService, private router: Router) { }




  login(form: NgForm, admin?: AdminLogin) {
    // this.admin = admin
    console.log(this.admin);
    this.adminAPI.loginAdmin(admin!).subscribe({


      next: (res) => {
        if (res.admin) {
          console.log(res);
          this.authorization.loginToken(res.token)
          this.userLog = this.authorization.TokenUserLogin;
          console.log(this.userLog);
          form.reset()
          document.getElementById("closeModalButton")?.click();
          this.router.navigate(['/home']);
          // this.router.url === '/home' ? location.reload() : this.router.navigate(['/home']);

        } else {
          alert('Invalid Email or Password ')
          document.getElementById("closeModalButton")?.click();
          admin!.password = ""
          console.log(form.value)


        }
      },
      error: (err) => {
        alert('Invalid Email or Password ')
        document.getElementById("closeModalButton")?.click();
        admin!.password = ""
        console.log(form.value)
      }
    })
  }

  logout() {
    this.authorization.logout()
    this.userLog = this.authorization.TokenUserLogin;
    console.log(this.userLog);
    console.log(this.router.url);

    this.router.navigate(['/home']);

  }

  ngOnInit(): void {
    this.userLog = this.authorization.TokenUserLogin;
    console.log(this.router.url);

  }

}
