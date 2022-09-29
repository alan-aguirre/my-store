import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  getProducts() {return this.http.get<{ id: number,name:string, price: number, description:string}[]>('/assets/products.json');
}

constructor(private http: HttpClient) { }
}
