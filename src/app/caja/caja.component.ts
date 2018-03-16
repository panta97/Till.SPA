import { CommonService } from './../_services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent implements OnInit {

  constructor(private common: CommonService) { }

  ngOnInit() {
    this.common.getStores();
  }

}
