import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService{
  private url = "https://fakestoreapi.com/products";

  constructor(private httpClient:HttpClient) { }

  getItems() : Observable<Item[]> {    
    return this.httpClient.get<Item[]>(this.url);
  }
} 