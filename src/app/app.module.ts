import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { ButtonComponent } from './common-components/button/button.component';
import { ProjectsComponent } from './projects/projects.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './views/home/home.component';
import { ContactComponent } from './views/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ProyectsComponent } from './sections/proyects/proyects.component';
import { CardTechComponent } from './common-components/card-tech/card-tech.component';

@NgModule({
  declarations: [
    AppComponent,
    Section1Component,
    Section2Component,
    ButtonComponent,
    ProjectsComponent,
    TechnologiesComponent,
    CvComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ProyectsComponent,
    CardTechComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
