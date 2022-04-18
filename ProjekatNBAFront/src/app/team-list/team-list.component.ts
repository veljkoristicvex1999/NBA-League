import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Igrac } from 'src/app/model/igrac';
import { Tim } from 'src/app/model/tim';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  public teams$ : Observable<Tim[]>;
  public players$: Observable<Igrac[]>;
  public imeTIma: string;
  public korisnikLog: boolean=false;
  public adminLog: boolean=false;


  constructor(private teamServis:TeamsService) { }

  ngOnInit(): void {
    if (localStorage.getItem("korisnik")) {
      this.korisnikLog = true;
    }
    if (localStorage.getItem("admin")) {
      this.adminLog = true;
    }
    this.teams$=this.teamServis.getTeams();

  }
  players() {
    console.log("komponenta")
    console.log(this.imeTIma)
    this.players$=this.teamServis.getPlayers(this.imeTIma);
   }


}
