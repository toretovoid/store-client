import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Client} from '../shared/client';
import {baseURL} from '../shared/baseurl';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  getClient(): Observable<Client[]> {
    // return Observable.of(ITEMS).delay(2000);
    return this.http.get(baseURL + 'clients') as Observable<Client[]>;
  }
}
