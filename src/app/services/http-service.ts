import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseURL = 'https://rpnszaidmg.execute-api.eu-west-1.amazonaws.com/Prod'
  encryptedAuthrization = btoa('9874654654987654658');
  httpOptions = {
    headers: new HttpHeaders()
      .set('Authorization', '9874654654987654658')
      .set('Content-Type', 'application/json')
  }

  constructor(private http: HttpClient) {


  }
  get(apiName: string, params?: string) {
    return this.http.get(this.baseURL + apiName + params, this.httpOptions);

  }
}
