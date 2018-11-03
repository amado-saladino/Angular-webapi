import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';

import { FilterPipeModule } from 'ngx-filter-pipe';
import { OrderModule } from 'ngx-order-pipe';

import { UserRoutingModule } from "./user-routing.module";

import { UsersComponent } from "./users.component";
import { AddUserComponent } from "./add-user.component";
import { UserDetailsComponent } from "./user-details.component";
import { UpdateUserComponent } from "./update-user.component";
import { UserService } from "../shared/services/user.service";
import { WindowRef } from "../shared/services/window.service";
import { UserDetailsGuard } from "./users-guard.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,UserRoutingModule
  ],
  declarations: [
    AddUserComponent,UpdateUserComponent,
    UsersComponent,UserDetailsComponent
  ],
  providers: [ UserDetailsGuard,UserService,WindowRef ]
})
export class UserModule {}