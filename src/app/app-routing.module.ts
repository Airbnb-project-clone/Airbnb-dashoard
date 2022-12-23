import { HostingDetailsComponent } from './Components/hosting-details/hosting-details.component';
import { HostingComponent } from './Components/hosting/hosting.component';
import { ListPlacesComponent } from './Components/place/list-places/list-places.component';
import { ListUsersComponent } from './Components/user/list-users/list-users.component';
import { HomeComponent } from './Components/home/home.component';
import { AddAdminComponent } from './Components/admin/add-admin/add-admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },// Default Path
  { path: 'add-admin', component: AddAdminComponent },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: ListUsersComponent },
  { path: 'units', component: ListPlacesComponent },
  { path: 'hosting', component: HostingComponent },
  { path: 'hostDetails/:tempID', component: HostingDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
