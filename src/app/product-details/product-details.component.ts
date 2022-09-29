import { Component, OnInit } from '@angular/core';
import { Product} from '../ products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { ListingService } from '../listing.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products!: Observable<{ id: number,name:string, price: number, description:string}[]>;
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private cartService: CartService,private listingService: ListingService) {this.products = this.listingService.getProducts(); }
  
  addToCart(product: Product) { this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId')); 
    }

}
