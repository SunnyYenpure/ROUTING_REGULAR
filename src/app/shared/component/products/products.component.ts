import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../models/products';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productarr: Array<Iproduct> = [];
  constructor(
    private _productservice: ProductsService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    //  this._router.navigate([this.productarr[0].id])
   this.getAll()
  }

  getAll(){
     this._productservice.fetchallproducts().subscribe({
      next: (data) => {
        console.log(data);
        this.productarr = data;
        // this._router.navigate([this.productarr[0].id])
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  gotoproduct(product: Iproduct) {
    console.log(product);
    this._router.navigate(['products', product.id],{
      queryParams:{stock:product.inStock},
    })
  }
}
