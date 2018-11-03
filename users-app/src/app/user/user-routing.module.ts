import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddUserComponent } from "./add-user.component";
import { UserDetailsComponent } from "./user-details.component";
import { UserListComponent } from "./user-list.component";
import { UpdateUserComponent } from "./update-user.component";
import { UsersComponent } from "./users.component";
import { UserDetailsGuard } from "./users-guard.service";
import { SearchComponent } from "./search-user.component";

const userRoutes:Routes=[
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    { path: 'users',  component: UsersComponent,children:[
    { path:'add', component:AddUserComponent},
    { path:'search', component:SearchComponent},
    { path:'update/:id',component:UpdateUserComponent},    
    { path: ':id',canActivate:[UserDetailsGuard],  component: UserDetailsComponent },
    { path:'', component:UserListComponent}
  ]}   
];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }