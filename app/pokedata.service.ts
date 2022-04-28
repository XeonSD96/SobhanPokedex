import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokedataService {
  pokedata: any;
  ngOnInIt() {}  
 url="https://pokeapi.co/api/v2/pokemon/"
  constructor(private http:HttpClient) { }

  getPokeData(){
    
    return this.http.get(this.url);
  }

}