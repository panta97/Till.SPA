import { LocalStorageService } from './../_services/local-storage.service';
import { TableService } from './../_services/table.service';
import { gastoObj } from './../_helpers/gastoObj';
import { CommonService } from './../_services/common.service';
import { gastos } from './../_models/gastos';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-vales-diarios',
  templateUrl: './vales-diarios.component.html',
  styleUrls: ['./vales-diarios.component.css', '/../../assets/css/card.css']
})
export class ValesDiariosComponent implements OnInit {

  valesDiario: gastos[] = JSON.parse(localStorage.getItem(environment.valeDiario));
  total: number = this.local.getExpenseTotalByType(localStorage.getItem(environment.valeDiario));
  columns = gastoObj;
  valesDiarios$;

  constructor(
    private http: CommonService,
    private table: TableService,
    private local: LocalStorageService) { }

  ngOnInit() {
    // this.getValesDiarios();
  }

  getValesDiarios(): void {
    this.http.getVales(1, environment.valeDiario).subscribe(response => {
      this.valesDiario = response;
    })
  }

  getValesDiarios$(): void {
    this.valesDiarios$ = this.http.getVales(1, environment.valeDiario);
  }

  onDataChange(): void {
    const row = this.table.getDataAtRow('hotInstance');

    if (row !== undefined) {
      this.local.updateGasto(row, environment.valeDiario)

      this.total = this.local.getExpenseTotalByType(localStorage.getItem(environment.valeDiario));

      this.http.updateGasto(row, +localStorage.getItem(environment.tallyId));
    }
  }

  addRow(): void {
    this.http.createExpenseByType(+localStorage.getItem(environment.tallyId), 'diario')
      .subscribe(responseId => {
        this.valesDiario.push(
          {
            id: responseId,
            type: 'diario',
            amount: 0,
            description: ''
          }
        );
        localStorage.setItem(environment.valeDiario, JSON.stringify(this.valesDiario))
      }, () => {}
      , () => {
        this.table.tableReload('hotInstance');
      });
  }

}
