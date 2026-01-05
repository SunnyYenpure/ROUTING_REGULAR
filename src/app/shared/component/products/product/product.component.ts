import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogModule,
} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/models/products';
import { ProductsService } from 'src/app/shared/services/products.service';
import { GetConfirmComponent } from '../../get-confirm/get-confirm.component';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  productobj!: Iproduct;
  productid!: string;

  constructor(
    private _routes: ActivatedRoute,
    private _productservice: ProductsService,
    private _router: Router,
    private _matdailog: MatDialog,
    private _snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.getproductdetails();
  }

  getproductdetails() {
    this._routes.paramMap.subscribe((params) => {
      console.log(params.get('productid'));
      this.productid = params.get('productid')!;
      // api call karnge single get

      if (this.productid) {
        this._productservice.fetchproduct(this.productid).subscribe({
          next: (data) => {
            console.log(data);
            this.productobj = data;
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    });
  }
  onedit() {
    this._router.navigate(['/products', this.productid, 'edit'], {
      relativeTo: this._routes,
      queryParamsHandling: 'preserve',
    });
  }

  onremove() {
    let matconfig = new MatDialogConfig();

    matconfig.data = 'Are you sure you want to remove this product?';
    matconfig.disableClose = true;
    matconfig.width = '350px';

    let matdailogref = this._matdailog.open(GetConfirmComponent, matconfig);

    matdailogref.afterClosed().subscribe((res) => {
      if (res) {
        this._productservice.removeproduct(this.productid).subscribe({
          next: (data) => {
            console.log(data);
            this._snackbar.opensnackbar(`The product removed succesfully..!!`);
            this._router.navigate(['products']);
          },
        });
      }
    });
  }
}
