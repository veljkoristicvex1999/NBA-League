import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utakmica } from '../model/utakmica';

@Injectable({
  providedIn: 'root'
})
export class UtakmicaService {

  BACKAND_BASE = "http://localhost:8080/Nba/api/";
  

  constructor(private http: HttpClient) { }


  getGames(): Observable<Utakmica[]> {
    return this.http.get<Utakmica[]>(this.BACKAND_BASE + "sveUtakmice");
  }

}
