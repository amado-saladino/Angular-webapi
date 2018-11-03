import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from "./NotFound/page-not-found.component";
import { ProductComponent } from "./product/product.component";

const appRoutes:Routes=[
  { path: 'product',component:ProductComponent} ,
  { path:'pagenotfound',component:PageNotFoundComponent},
  { path: '**',  component: PageNotFoundComponent }   
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}