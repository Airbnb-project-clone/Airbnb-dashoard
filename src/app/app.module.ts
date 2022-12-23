import { ListUsersComponent } from './Components/user/list-users/list-users.component';
import { AddAdminComponent } from './Components/admin/add-admin/add-admin.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Components/home/home.component';
import { ListPlacesComponent } from './Components/place/list-places/list-places.component';
import { HostingComponent } from './Components/hosting/hosting.component';
import { HostingDetailsComponent } from './Components/hosting-details/hosting-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    AddAdminComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListPlacesComponent,
    HostingComponent,
    HostingDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
