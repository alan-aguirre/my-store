import { Component, OnInit } from '@angular/core';

import { ListingService } from '../listing.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: Observable<{ id: number,name:string, price: number, description:string}[]>;
  
  constructor(private listingService: ListingService) {this.products = this.listingService.getProducts(); }
  
  ngOnInit(): void {
  }

  share() {
    window.alert('The product has been shared!');
    }

    onNotify() { window.alert('You will be notified when the product goes on sale');}
}
