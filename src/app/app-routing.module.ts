import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValesDiariosComponent } from './vales-diarios/vales-diarios.component';
import { ValesSistemaComponent } from './vales-sistema/vales-sistema.component';
import { IngresosComponent } from './ingresos/ingresos.component';

const routes: Routes = [
  { path: 'vales/diarios', component: ValesDiariosComponent },
  { path: 'vales/sistema', component: ValesSistemaComponent },
  { path: 'ingresos', component: IngresosComponent },
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
