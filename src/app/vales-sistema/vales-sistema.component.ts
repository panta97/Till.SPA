import { LocalStorageService } from './../_services/local-storage.service';
import { TableService } from './../_services/table.service';
import { gastoObj } from './../_helpers/gastoObj';
import { CommonService } from './../_services/common.service';
import { gastos } from './../_models/gastos';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-vales-sistema',
  templateUrl: './vales-sistema.component.html',
  styleUrls: ['./vales-sistema.component.css', '/../../assets/css/card.css']
})
export class ValesSistemaComponent implements OnInit {
  valesSistema: gastos[] = JSON.parse(localStorage.getItem(environment.valeSistema));
  total: number = this.local.getTotal();
  columns = gastoObj;

  constructor(
    private http: CommonService,
    private table: TableService,
    private local: LocalStorageService) { }

  ngOnInit() {
    console.log(this.total);
  }

  getValesSistema(): void {
    this.http.getVales(1, environment.valeSistema).subscribe(response => {
      this.valesSistema = response;
    });
  }

  onDataChange(): void {
    const row = this.table.getDataAtRow('hotInstance');


    if (row !== undefined) {
      this.local.updateGasto(row, environment.valeSistema);

      this.total = this.local.getTotal();

      this.http.updateGasto(row, +localStorage.getItem(environment.tallyId));
    }
  }

  addRow(): void {
    this.http.createExpenseByType(+localStorage.getItem(environment.tallyId), 'sistema')
      .subscribe(responseId => {
        this.valesSistema.push(
          {
            id: responseId,
            type: 'sistema',
            amount: 0,
            description: ''
          }
        );
        localStorage.setItem(environment.valeSistema, JSON.stringify(this.valesSistema));
      }, () =>{}
      , () => {
        this.table.tableReload('hotInstance');
      });
  }

}
