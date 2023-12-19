import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Technologies } from '../../models/technologies';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {

  public technologies: Technologies = {TechnologyId: "", TechnologyName: "", TechnologyImg: ""};

  constructor(private apiservice: ApiService) {
    console.log("TechComponent::constructor()");
  }


  ngOnInit(){
    this.apiservice.getTechnologies().subscribe(technologies => (this.technologies = technologies));
    console.log("ngOnInit. FIN fsdfsdsfds")
  }

}
