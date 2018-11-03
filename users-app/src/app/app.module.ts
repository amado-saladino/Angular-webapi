import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy,LocationStrategy } from '@angular/common';
//import { HttpModule }    from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';

import { UserListComponent } from "./user/user-list.component";
import { PageNotFoundComponent } from "./NotFound/page-not-found.component";
import { ProductComponent } from "./product/product.component";

import { UserService } from "./shared/services/user.service";

import { AppRoutingModule } from "./app-routing.module";
import { FilterPipeModule } from 'ngx-filter-pipe';
import { OrderModule } from 'ngx-order-pipe';
import { UserModule } from "./user/user.module";
import { SearchComponent } from "./user/search-user.component";


@NgModule({
  declarations: [
    AppComponent
    ,PageNotFoundComponent,ProductComponent,UserListComponent
    ,SearchComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,
    FilterPipeModule,OrderModule,
    UserModule,AppRoutingModule,NgxPaginationModule,
    BrowserAnimationsModule
  ],
  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
