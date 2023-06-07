import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


import { LoginComponent } from './pages/login/login.component';

import { MpComponent } from './mp/mp.component';
import { ServiceComponent } from './service/service.component';
import { DepartmentComponent } from './department/department.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  
 
  
  {path:'login',component:LoginComponent},
  {path:'mp',component:MpComponent},
  {path:'contact',component:ContactComponent},
  {path:'service',component:ServiceComponent},
  {path:'department',component:DepartmentComponent},
  {path:'about',component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
