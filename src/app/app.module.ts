import { CommonService } from './_services/common.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ValesDiariosComponent } from './vales-diarios/vales-diarios.component';
import { ValesSistemaComponent } from './vales-sistema/vales-sistema.component';
import { IngresosComponent } from './ingresos/ingresos.component';


@NgModule({
  declarations: [
    AppComponent,
    ValesDiariosComponent,
    ValesSistemaComponent,
    IngresosComponent
],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
