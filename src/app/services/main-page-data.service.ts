import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  constructor(private http: HttpClient) { }

  getNavigationButtons() {
    return this.http.get(environment.apiurl + '/mainmenu/navigationbuttons');
  }
  getMainText() {
    return this.http.get(environment.apiurl + '/mainmenu/maintext');
  }
}
