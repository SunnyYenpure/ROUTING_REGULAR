import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardsComponent } from './shared/component/dashboards/dashboards.component';
import { UsersComponent } from './shared/component/users/users.component';
import { FairsComponent } from './shared/component/fairs/fairs.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { UserComponent } from './shared/component/users/user/user.component';
import { UserformComponent } from './shared/component/users/userform/userform.component';
import { FairsDetailsComponent } from './shared/component/fairs/fairs-details/fairs-details.component';
import { ProductFormComponent } from './shared/component/products/product-form/product-form.component';
import { ProductComponent } from './shared/component/products/product/product.component';
import { AuthComponent } from './shared/component/auth/auth.component';
import { AuthguardService } from './shared/services/authguard.service';

const approutes: Routes = [
  {
    path: 'home',
    component: DashboardsComponent,
  },
  //  {
  //   path: 'home/products',
  //   component: ProductsComponent,
  // },
  {
    path: '',
    component: AuthComponent,
  },
  //   {
  //     path: '',
  //     redirectTo: 'home',
  //     pathMatch:'full'
  //   },
{
    path: 'users',
    component: UsersComponent,
    canActivate:[AuthguardService]
  },

  {
    path: 'users/adduser',
    component: UserformComponent,
  },

  {
    path: 'users/:userid',
    component: UserComponent,
  },

    {
    path: 'users/:userid/edituser',
    component: UserformComponent,
  },

  {
    path: 'products',
    component: ProductsComponent,
    // canActivateChild:[AuthguardService],
    children:[
      {
        path:'addproducts',
        component:ProductFormComponent
      },
       {
        path:':productid/edit',
        component:ProductFormComponent
      },
      {
        path:':productid',
        component:ProductComponent
      }
    ]
  },
  {
    path: 'fairs',
    component: FairsComponent,
    children: [
      {
        path: ':fairsid',
        component: FairsDetailsComponent,
      },
    ],
  },
  // {
  //   path: 'admin',
  //   component: PageNotFoundComponent,
  // },
  {
    path: 'PageNotFoundComponent',
    component: PageNotFoundComponent,
  },

  {
    path: '**',
    redirectTo: 'PageNotFoundComponent',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [],
})
export class ApproutingModule {}
