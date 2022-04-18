import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Utakmica } from '../model/utakmica';
import { UtakmicaService } from '../services/utakmica.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public games$ : Observable<Utakmica[]>;
  public korisnikLog: boolean=false;
  public adminLog: boolean=false;
 ;
  constructor(private utakmicaServices:UtakmicaService) { }

  ngOnInit(): void {
    if (localStorage.getItem("korisnik")) {
      this.korisnikLog = true;
    }
    if (localStorage.getItem("admin")) {
      this.adminLog = true;
    }
    this.games$=this.utakmicaServices.getGames();

  }

}
