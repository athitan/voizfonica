import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Home1Component } from './home1/home1.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { AdminComponent } from './admin/admin.component';
import { PostpaidComponent } from './postpaid/postpaid.component';

@NgModule({
  declarations: [
    AppComponent,
    Home1Component,
    PrepaidComponent,
    AdminComponent,
    PostpaidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ApiService,],
  bootstrap: [AppComponent,]
})
export class AppModule { }
