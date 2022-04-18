import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vesti } from 'src/app/model/vesti';
import { VestiService } from '../services/vesti.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  public news$ : Observable<Vesti[]>;
  public korisnikLog: boolean=false;
  public adminLog: boolean=false;

  constructor(private vestiServis:VestiService) { }

  ngOnInit(): void {
      if (localStorage.getItem("korisnik")) {
        this.korisnikLog = true;
      }
      if (localStorage.getItem("admin")) {
        this.adminLog = true;
      }
    
      this.news$=this.vestiServis.getVesti();
  }

}
