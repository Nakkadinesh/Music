import { Component } from '@angular/core';
import { PaymentserviceService } from '../paymentservice.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {
customers: any;
constructor(private service:PaymentserviceService){

};
ngOnInit(){
  this.service.getCustomers().subscribe((data:any)=>{this.customers = data;})
}
}
