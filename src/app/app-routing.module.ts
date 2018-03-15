import { AuthGuard } from './_guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValesDiariosComponent } from './vales-diarios/vales-diarios.component';
import { ValesSistemaComponent } from './vales-sistema/vales-sistema.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'vales/diarios', component: ValesDiariosComponent, canActivate: [AuthGuard] },
  { path: 'vales/sistema', component: ValesSistemaComponent, canActivate: [AuthGuard] },
  { path: 'ingresos', component: IngresosComponent, canActivate: [AuthGuard] },
  { path: 'principal', component: PrincipalComponent, canActivate: [AuthGuard] },
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
