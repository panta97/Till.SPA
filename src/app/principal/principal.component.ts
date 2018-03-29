import { CommonService } from './../_services/common.service';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  tallyDetail: any;
  tallyId: number = +localStorage.getItem(environment.tallyId);

  constructor(private http: CommonService) { }

  ngOnInit() {
    this.getTallyDetails();
    this.populateExpenses();
  }

  getTallyDetails() {
    this.http.getTallyDetails(this.tallyId).subscribe(response => {
      this.tallyDetail = response;
    });
  }

  populateExpenses() {
    this.http.getExpensesByType(this.tallyId, 'sistema').subscribe(response => {
      localStorage.setItem(environment.valeSistema, JSON.stringify(response));
    })
  }

}
