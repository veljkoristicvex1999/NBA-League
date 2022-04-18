import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Igrac } from 'src/app/model/igrac';
import { Tim } from 'src/app/model/tim';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {


  BACKAND_BASE = "http://localhost:8080/Nba/api/";
  

  constructor(private http: HttpClient) { }


  getTeams(): Observable<Tim[]> {
    return this.http.get<Tim[]>(this.BACKAND_BASE + "getTimovi");
  }
  getPlayers(imeTIma: string): Observable<Igrac[]> {
    console.log("service")
    let params = new HttpParams()
      .set("imeTIma", imeTIma)
      console.log(imeTIma)
    return this.http.get<Igrac[]>(this.BACKAND_BASE + "igraciTima", { params });

  }
}
