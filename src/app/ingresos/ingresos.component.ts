import { ingresos } from './../_models/ingresos';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../_services/common.service';
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  ingresos: ingresos[];

  constructor(private common: CommonService) { }

  ngOnInit() {
    this.getIngresos();
  }

  getIngresos(): void {
    this.common.getIngresos(1).subscribe(response => {
      this.ingresos = response;
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  getIngresosMap(): void {
    this.common.getIngresos(1)
      .map(ele => {
        console.log(ele);
      })
      .subscribe(response => {
        // this.ingresos.push(response);
      });
  }

}
