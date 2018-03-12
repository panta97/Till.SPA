import { gastos } from './_models/gastos';
import { ingresos } from './_models/ingresos';
import { CommonService } from './_services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'app';

  valesDiarios: gastos[];
  valesSistema: gastos[];
  ingresos: ingresos[];

	constructor(private common: CommonService) { }
	
	ngOnInit() {
		this.initializeDataTables();
	}

  initializeDataTables() {
    const cajaId = 1;

    this.common.getIngresos(cajaId)
      .subscribe(response => {
        this.ingresos = response.map((ingreso) => {
					ingreso.total = +(ingreso.denomination * ingreso.amount).toFixed(2);
					return ingreso;
				});
				localStorage.setItem("ingresos", JSON.stringify(this.ingresos));
			}, () => {
			});
			
		
		this.common.getVales(cajaId, 'diario')
			.subscribe(response => {
				this.valesDiarios = response;
				localStorage.setItem("diario", JSON.stringify(this.valesDiarios));
			});
		
		this.common.getVales(cajaId, 'sistema')
			.subscribe(response => {
				this.valesSistema = response;
				localStorage.setItem("sistema", JSON.stringify(this.valesSistema));
			});
    
  }
}
