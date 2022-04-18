import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Korisnik } from 'src/app/model/korisnik';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  public korisnik: Korisnik = new Korisnik();

  ngOnInit(): void {
  }

  register(registerForm: any) {
    if (registerForm.invalid) {
      alert("Invalid")
    } else {
      this.userService.register(this.korisnik).subscribe(resp => {
        if (resp==false) {
          alert("Korisnik vec postoji!")
        } else {
          alert("Uspesno registrovanje!")
          this.router.navigate(['login'])
        }
      })
    }
  }

}
