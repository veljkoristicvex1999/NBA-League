import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Korisnik } from 'src/app/model/korisnik';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  BACKAND_BASE = "http://localhost:8080/Nba/api/";

  constructor(private http: HttpClient) { }

  register(korisnik: Korisnik): Observable<any> {

    return this.http.post(this.BACKAND_BASE + "register", korisnik)
  }

  login(email: string, sifra: string): Observable<any> {
    let params = new HttpParams()
      .set("email", email)
      .set("sifra", sifra);

    return this.http.post<Korisnik>(this.BACKAND_BASE + "login", params, {

      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    }
    )
  }
  
}
