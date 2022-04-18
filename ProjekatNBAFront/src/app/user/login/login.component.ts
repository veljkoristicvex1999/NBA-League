import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  public email: string = '';
  public sifra: string = '';

  ngOnInit(): void {
  }

  login() {
    this.userService.login(this.email, this.sifra).subscribe((respons: any) => {
      console.log(respons.email)
      if (respons.email == "") {
        alert("Pogresna email adresa")
      }
      else {
        if (respons.idUloga == 2) {
          localStorage.setItem("imeKorisnika", respons.imeKorisnika)
          localStorage.setItem("korisnik", respons.email)
          console.log(localStorage.getItem("email"))
        }
        else {
          localStorage.setItem("imeKorisnika", respons.imeKorisnika)
          localStorage.setItem("admin", respons.email);
        }
                this.router.navigate(['/tabela']).then(() => {
          window.location.reload();
        })
      };
    })
  }

}
