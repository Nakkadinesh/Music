import { Component, OnInit } from '@angular/core';
import { PaymentserviceService } from '../paymentservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
payments: any;
constructor(private service:PaymentserviceService){
  this.payments = {
    name: '',
    amount: '',

  }
}
ngOnInit(){

}
payment(pay:any){
  console.log(pay);
  this.payments.name=pay.name;
  this.payments.amount=pay.amount;
  console.log(this.payments)
  this.service.paid(this.payments).subscribe((data: any)=>{console.log(data);})
}

}
