import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentserviceService {

  constructor(private http: HttpClient) { }
  paid(done:any):any{
    return this.http.post('http://localhost:8085/addBooking', done);
  }
  getCustomers(): any{
    return this.http.get('http://localhost:8085/getBookings');
  }
}
