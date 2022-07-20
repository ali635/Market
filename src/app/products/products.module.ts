import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProctsComponent } from './components/all-procts/all-procts.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';



@NgModule({
  declarations: [
    AllProctsComponent,
    ProductsDetailsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class ProductsModule { }
