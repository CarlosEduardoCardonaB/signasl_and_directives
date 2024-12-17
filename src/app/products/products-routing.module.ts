import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './pages/productPage/productPage.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ProductPageComponent },
      { path: '**', redirectTo:'products' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
