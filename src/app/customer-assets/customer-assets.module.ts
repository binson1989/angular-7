import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAssetsComponent } from './customer-assets/customer-assets.component';
import { CustomerAssetsRoutingModule } from './customer-assets-routing.module';

@NgModule({
  declarations: [CustomerAssetsComponent],
  imports: [
    CommonModule,
    CustomerAssetsRoutingModule
  ]
})
export class CustomerAssetsModule { }
