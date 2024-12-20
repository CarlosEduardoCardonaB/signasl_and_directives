import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { SignalsRoutingModule } from './signals-routing.module';
import { SignalsLayoutComponent } from './layout/signalsLayout/signalsLayout.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { PropertiesComponent } from './pages/properties/properties.component';



@NgModule({
  declarations: [
    SignalsLayoutComponent,
    SideMenuComponent,
    PropertiesComponent
  ],
  imports: [
    CommonModule,
    SignalsRoutingModule,
    JsonPipe
  ],
  exports: []
})
export class SignalsModule { }
