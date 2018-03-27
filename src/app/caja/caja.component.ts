import { environment } from './../../environments/environment';
import { LocalStorageService } from './../_services/local-storage.service';
import { CommonService } from './../_services/common.service';
import { Component, OnInit } from '@angular/core';
import { stores } from '../_models/stores';
import { tills } from '../_models/tills';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent implements OnInit {

  stores: stores[];
  tills: tills[];
  model: any = {};

  constructor(
    private common: CommonService, 
    private router: Router, 
    private local: LocalStorageService) { }

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
    this.common.createTally(+this.model.tillId).subscribe((response) => {
      console.log('successfuly created');
      console.log(response);
      this.router.navigate(['/ingresos'])
    }, error => {
      console.log(error);
    });
  }

  create() {
    this.common.createTally(+this.model.tillId)
      .pipe(
        mergeMap((response: any) => this.common.createEarningTemplate(response.id))
      ).subscribe((responseId) => {

        this.common.getIngresos(responseId).subscribe(response => {
          localStorage.setItem(environment.ingreso, JSON.stringify(response));

          this.router.navigate(['/ingresos']);
        });
      });
  }
}
