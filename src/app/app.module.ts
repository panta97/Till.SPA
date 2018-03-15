import { AuthGuard } from './_guards/auth.guard';
import { AuthService } from './_services/auth.service';
import { CommonService } from './_services/common.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ValesDiariosComponent } from './vales-diarios/vales-diarios.component';
import { ValesSistemaComponent } from './vales-sistema/vales-sistema.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { HotTableModule } from 'angular-handsontable';
import { TableService } from './_services/table.service';
import { LocalStorageService } from './_services/local-storage.service';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ValesDiariosComponent,
    ValesSistemaComponent,
    IngresosComponent,
    PrincipalComponent,
    LoginComponent
],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    HotTableModule
  ],
  providers: [
    CommonService,
    TableService,
    LocalStorageService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
