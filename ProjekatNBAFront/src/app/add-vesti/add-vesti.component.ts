import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VestiService } from '../services/vesti.service';

@Component({
  selector: 'app-add-vesti',
  templateUrl: './add-vesti.component.html',
  styleUrls: ['./add-vesti.component.css']
})
export class AddVestiComponent implements OnInit {
  public opis: string = ""
  public slikaVest: string = ""
  public email:string=""
  constructor(private vestiService: VestiService, private router: Router) { }

  ngOnInit(): void {
    
     let  promenljiva= JSON.stringify(localStorage.getItem('email'));
    this.email=promenljiva.substring(1,promenljiva.length-1)
    console.log(this.email)
  }
  dodajVesti() {
    this.vestiService.addVesti(this.opis, this.slikaVest,this.email).subscribe(resp => {
      alert("Dodata vest!")
      this.router.navigate(['akcije'])
    })
  }

}
