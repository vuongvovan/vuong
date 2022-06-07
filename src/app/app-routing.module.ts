import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop/shop.component';
import { DathangComponent } from './dathang/dathang.component';
import { Sp1Component } from './sp1/sp1.component';
import { Sp2Component } from './sp2/sp2.component';
import { Sp3Component } from './sp3/sp3.component';
import { Sp4Component } from './sp4/sp4.component';
import { Sp5Component } from './sp5/sp5.component';
import { Sp6Component } from './sp6/sp6.component';
import { Sp7Component } from './sp7/sp7.component';
import { Sp8Component } from './sp8/sp8.component';
import { Sp9Component } from './sp9/sp9.component';
import { Sp10Component } from './sp10/sp10.component';
import { Sp11Component } from './sp11/sp11.component';
import { Sp12Component } from './sp12/sp12.component';
import { Sp13Component } from './sp13/sp13.component';
import { Sp14Component } from './sp14/sp14.component';
import { Sp15Component } from './sp15/sp15.component';

const routes: Routes = [
  { path: 'Trangchu', component: HomeComponent },
  { path: 'Tinhtien', component: CheckoutComponent },
  { path: 'Sanpham', component: ProductComponent },
  { path: 'Tiepxuc', component: ContactComponent },
  { path: 'Cuahang', component: ShopComponent },
  { path: 'dathang', component: DathangComponent },
  { path: 'sp1', component: Sp1Component },
  { path: 'sp2', component: Sp2Component },
  { path: 'sp3', component: Sp3Component },
  { path: 'sp4', component: Sp4Component },
  { path: 'sp5', component: Sp5Component },
  { path: 'sp6', component: Sp6Component },
  { path: 'sp7', component: Sp7Component },
  { path: 'sp8', component: Sp8Component },
  { path: 'sp9', component: Sp9Component },
  { path: 'sp10', component: Sp10Component },
  { path: 'sp11', component: Sp11Component },
  { path: 'sp12', component: Sp12Component },
  { path: 'sp13', component: Sp13Component },
  { path: 'sp14', component: Sp14Component },
  { path: 'sp15', component: Sp15Component },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
