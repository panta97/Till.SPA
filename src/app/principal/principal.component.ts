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

  constructor(private http: CommonService) { }

  ngOnInit() {
    this.getTallyDetails();
  }

  getTallyDetails() {
    const tallyId = +localStorage.getItem(environment.tallyId);
    this.http.getTallyDetails(tallyId).subscribe(response => {
      this.tallyDetail = response;
    });
  }

}
