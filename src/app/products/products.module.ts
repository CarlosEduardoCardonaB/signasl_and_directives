import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductPageComponent } from './pages/productPage/productPage.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    JsonPipe,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    ProductPageComponent
  ]
})
export class ProductsModule { }
