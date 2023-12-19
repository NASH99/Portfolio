import { Injectable } from '@angular/core';
import { Technologies } from '../models/technologies';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private technologies: Technologies = {TechnologyId: "", TechnologyName: "", TechnologyImg: ""};
  private TechnologiesUrl = "http://localhost:3000/api/technologies/1";

  constructor(private http:HttpClient) { }

  public getTechnologies(): Observable<Technologies>{
    return this.http.get<Technologies>(this.TechnologiesUrl);
  }
}
