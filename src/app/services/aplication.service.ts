import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../models/Transaction';
import { HttpService } from './http-service';


@Injectable({
  providedIn: 'root'
})
export class AplicationService {

  constructor(private httpService: HttpService) { }
  getApplications():any {
    return this.httpService.get('/applications', '');
  }
  getCard(appId: string) {
    return this.httpService.get('/cards', '/{' + appId + '}');

  }
  getTransactions(appId: string) {
    return this.httpService.get('/trans', '/{' + appId + '}');
  }
}
