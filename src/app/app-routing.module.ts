import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { Home1Component } from './home1/home1.component';
const routes: Routes = [{path:'prepaid',component:PrepaidComponent},
{path:'postpaid',component:PostpaidComponent},
                         {path:'home1',component:Home1Component},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
