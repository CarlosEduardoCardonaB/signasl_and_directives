import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsLayoutComponent } from './layout/signalsLayout/signalsLayout.component';
import { CounterPageComponent } from './pages/counterPage/counterPage.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { UserInfoPageComponent } from './pages/userInfoPage/userInfoPage.component';

const routes: Routes = [
  {
    path: '',
    component:  SignalsLayoutComponent,
    children: [
      { path: 'counter', component:  CounterPageComponent},
      { path: 'properties', component:  PropertiesComponent },
      {path: 'user-info', component:  UserInfoPageComponent},
      { path: '**', redirectTo:'counter' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalsRoutingModule { }
