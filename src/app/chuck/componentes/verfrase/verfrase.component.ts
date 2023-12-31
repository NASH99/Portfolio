import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { Frase } from '../../modelos/frase';

@Component({
  selector: 'app-verfrase',
  templateUrl: './verfrase.component.html',
  styleUrls: ['./verfrase.component.scss']
})
export class VerfraseComponent implements OnInit{
  public frase: Frase = {value: "", icon_url: "", id: "", url: ""};

  constructor(private apiservice: ApiService) {
    //console.log("VerfraseComponent::constructor()");
  }


  ngOnInit(){
    this.apiservice.getFrase().subscribe(frase => (this.frase = frase));
    console.log("ngOnInit. FINa")
  }
}
