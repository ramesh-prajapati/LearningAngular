
import { Component } from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';

@Component({
    // selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html'//,
   // styleUrls:['app/products/product-list.component.css']
})

export class ProductListComponent {



    pageTitle:string='Product List';
    imageWidth:number=50;
    imageMarin:number=2;
    showImage:boolean = false;
    listFilter:string;
    products:IProduct[];
    errormessage:string;
    // products: any[] = 
    // [
    // {
    //     "productId": 1,
    //     "productName": "Leaf Rake",
    //     "productCode": "GDN-0011",
    //     "releaseDate": "March 19, 2016",
    //     "description": "Leaf rake with 48-inch wooden handle.",
    //     "price": 19.95,
    //     "starRating": 3.2,
    //     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    // },
    // {
    //     "productId": 2,
    //     "productName": "Garden Cart",
    //     "productCode": "GDN-0023",
    //     "releaseDate": "March 18, 2016",
    //     "description": "15 gallon capacity rolling garden cart",
    //     "price": 32.99,
    //     "starRating": 4.2,
    //     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    // },
    // {
    //     "productId": 5,
    //     "productName": "Hammer",
    //     "productCode": "TBX-0048",
    //     "releaseDate": "May 21, 2016",
    //     "description": "Curved claw steel hammer",
    //     "price": 8.9,
    //     "starRating": 4.8,
    //     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    // }];

    constructor  (private _productService:ProductService)
    {
        
    }

    ngOnInit(): void{
        //this.products = this._productService.getProducts();
        this._productService.getProducts()
            .subscribe(products=>this.products=products,
            error =>this.errormessage=<any>error);
    }

    toggleImage():void{
        this.showImage = !this.showImage;
    }

   onRatingClicked(message: string): void{
       this.pageTitle='Product List: '+ message;
   }
       
}