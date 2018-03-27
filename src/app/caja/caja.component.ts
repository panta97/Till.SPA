import { CommonService } from './../_services/common.service';
import { Component, OnInit } from '@angular/core';
import { stores } from '../_models/stores';
import { tills } from '../_models/tills';
import { Router } from '@angular/router';

@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent implements OnInit {

  stores: stores[];
  tills: tills[];
  model: any = {};

  constructor(private common: CommonService, private router: Router) { }

  ngOnInit() {
    this.getStores();
  }

  getStores() {
    this.common.getStores().subscribe(response => {
      this.stores = response;
    });
  }

  getTillsByStore(event) {
    this.common.getTillsByStore(event.value).subscribe(response => {
      this.tills = response;
    });
  }

  createTally() {
    this.common.createTally(+this.model.tillId).subscribe(() => {
      console.log('successfuly created');
      this.router.navigate(['/ingresos'])
    }, error => {
      console.log(error);
    });
  }

}