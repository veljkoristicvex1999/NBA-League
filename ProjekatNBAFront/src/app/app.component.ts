import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjekatNBA';

  public korisnikLog: boolean = false;
  public adminLog: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
    if (localStorage.getItem("korisnik")) {
      this.korisnikLog = true;
    }
    if (localStorage.getItem("admin")) {
      this.adminLog = true;
    }
  }

  removeToken() {
    if (localStorage.getItem("korisnik")) {
      localStorage.removeItem("korisnik")
    }
    if (localStorage.getItem("admin")) {
      localStorage.removeItem("admin")
    }
    this.router.navigate(["/sobe"]).then(()=>
    window.location.reload())
  }
}

