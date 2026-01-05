import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/models/products';
import { ProductsService } from 'src/app/shared/services/products.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  @ViewChild('productForm') productForm!: NgForm;
  isIneditmode: boolean = false;
  product!: Iproduct;
  productid!: string;

  constructor(
    private _uuidservice: UuidService,
    private _productservice: ProductsService,
    private _router: Router,
    private _snackbarservice: SnackbarService,
    private _routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productid = this._routes.snapshot.paramMap.get('productid')!;
    console.log(this.productid);
    this._productservice.fetchproduct(this.productid).subscribe({
      next: (data) => {
        if (data) {
          console.log(data);
          this.isIneditmode = true;
          setTimeout(() => {
            this.productForm.form.patchValue(data);
          }, 0);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }



  onSubmit() {
    let obj = {
      ...this.productForm.value,
      id: this._uuidservice.uuid(),
    };
    console.log(obj);
    this._productservice.createproduct(obj).subscribe({
      next: (data) => {
        console.log(data);
        this._snackbarservice.opensnackbar(
          `The Product With id ${obj.id} Added Successfully..!`
        );
        this.productForm.resetForm();
        this._router.navigate(['/products']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  onupdate() {
    let obj = {
      ...this.productForm.value,
      id: this.productid,
    };
    this._productservice.updateproduct(obj).subscribe({
      next: (data) => {
        console.log(data);
        this._snackbarservice.opensnackbar(
          `The Product Updated succcesfully..!!!`
        );
        this._router.navigate(['products']);
      },
    });
  }
}
