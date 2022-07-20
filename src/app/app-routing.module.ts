import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/components/cart/cart.component';
import { AllProctsComponent } from './products/components/all-procts/all-procts.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';

const routes: Routes = [
  {path: "products", component:AllProctsComponent},
  {path: "details/:id", component:ProductsDetailsComponent},
  {path: "cart", component:CartComponent},
  {path:"**",redirectTo:"products",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
