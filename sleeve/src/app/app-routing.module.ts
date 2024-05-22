import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsComponent } from './transactions/transactions.component';
import { LayoutComponent } from './layout/layout.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: '', component: LayoutComponent},
  { path: 'pay', component: PaymentComponent },
  { path: 'trans', component: TransactionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
