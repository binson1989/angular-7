import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerAssetsComponent } from './customer-assets/customer-assets.component';

const routes: Routes = [
  { path: '', component: CustomerAssetsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CustomerAssetsRoutingModule { }
