import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataSendService {

  constructor(public http: HttpClient) { }

  putData() {
    console.log('hello world');
    return this.http.post(environment.apiurl +  '/issues/add', { issues: 'something2' });
  }
}
