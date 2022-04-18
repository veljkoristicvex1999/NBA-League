import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vesti } from 'src/app/model/vesti';

@Injectable({
  providedIn: 'root'
})
export class VestiService {

  BACKAND_BASE = "http://localhost:8080/Nba/api/";
  

  constructor(private httpClient: HttpClient) { }


  getVesti(): Observable<Vesti[]> {
    return this.httpClient.get<Vesti[]>(this.BACKAND_BASE + "getVesti");
  }
  addVesti(opis: string, slikaVest: string, email:string) {
    let parametri = new HttpParams()
      .set("email", email)
      .set("opis", opis)
      .set("slikaVest", slikaVest)
    return this.httpClient.post(this.BACKAND_BASE + "addVesti", parametri)
  }
  deleteVesti(idVesti:string): Observable<any> {
    let params = new HttpParams().set("idVesti", idVesti)
    return this.httpClient.post(this.BACKAND_BASE + "deleteVesti", params);
  }
}
