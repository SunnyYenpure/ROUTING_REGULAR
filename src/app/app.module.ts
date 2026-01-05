import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { UsersComponent } from './shared/component/users/users.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { DashboardsComponent } from './shared/component/dashboards/dashboards.component';
import { FairsComponent } from './shared/component/fairs/fairs.component';
import { ApproutingModule } from './app-routing-module';
import { RouterModule } from "@angular/router";
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { UserComponent } from './shared/component/users/user/user.component';
import { UserformComponent } from './shared/component/users/userform/userform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { GetConfirmComponent } from './shared/component/get-confirm/get-confirm.component';
import { A11yModule } from "@angular/cdk/a11y";
import { FairsCardComponent } from './shared/component/fairs/fairs-card/fairs-card.component';
import { FairsDetailsComponent } from './shared/component/fairs/fairs-details/fairs-details.component';
import { ProductFormComponent } from './shared/component/products/product-form/product-form.component';
import { ProductComponent } from './shared/component/products/product/product.component';
import { AuthComponent } from './shared/component/auth/auth.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    ProductsComponent,
    DashboardsComponent,
    FairsComponent,
    PageNotFoundComponent,
    UserComponent,
    UserformComponent,
    GetConfirmComponent,
    FairsCardComponent,
    FairsDetailsComponent,
    ProductFormComponent,
    ProductComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    ApproutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    FormsModule,
    A11yModule,
    MatSnackBarModule,
    HttpClientModule

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
