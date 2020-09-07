import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pastel } from './Pastel';

@Injectable({
  providedIn: 'root'
})
export class ConsumogitService {

  URL = "https://byrontosh.github.io/IONIC/";

  constructor(private httpc: HttpClient) { }


  getFabricantes(): Observable<Pastel> {
    return this.httpc.get<Pastel>(this.URL); 
  }


}
