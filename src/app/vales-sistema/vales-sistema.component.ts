import { CommonService } from './../_services/common.service';
import { gastos } from './../_models/gastos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vales-sistema',
  templateUrl: './vales-sistema.component.html',
  styleUrls: ['./vales-sistema.component.css']
})
export class ValesSistemaComponent implements OnInit {
  valesSistema: gastos[];

  constructor(private common: CommonService) { }

  ngOnInit() {
    this.getValesSistema();
  }

  getValesSistema(): void {
    this.common.getVales(1, 'sistema').subscribe(response => {
      this.valesSistema = response;
    });
  }

}
