import { Component, Input, OnInit } from '@angular/core';
import { Vesti } from '../model/vesti';
import { VestiService } from '../services/vesti.service';

@Component({
  selector: 'app-delete-vesti',
  templateUrl: './delete-vesti.component.html',
  styleUrls: ['./delete-vesti.component.css']
})
export class DeleteVestiComponent implements OnInit {
  public idVesti:string=""
  public adminLog: boolean=false;
  public korisnikLog: boolean=false;

  constructor(private vestiService: VestiService) { }
  
  
  ngOnInit(): void {
    if (localStorage.getItem("korisnik")) {
      this.korisnikLog = true;
    }
    if (localStorage.getItem("admin")) {
      this.adminLog = true;
    }
  }
  
  delVest() {
    console.log(this.idVesti)
    this.vestiService.deleteVesti(this.idVesti).subscribe(resp => {
      console.log(this.idVesti)
      if (resp==true) {
        console.log("Vesti je izbrisana")
        alert("The message has been deleted   ")
        window.location.reload();
      }
    })
  }
}
