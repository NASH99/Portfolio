import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ChuckModule } from './chuck/chuck.module';
import { PortfolioModule } from './portfolio/portfolio.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './common-components/button/button.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { HomeComponent } from './views/home/home.component';
import { ContactComponent } from './views/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { CardTechComponent } from './common-components/card-tech/card-tech.component';
import { ProyectComponent } from './views/proyect/proyect.component';
import { NavbarComponent } from './common-components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TechnologiesComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    CardTechComponent,
    ProyectComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChuckModule,
    PortfolioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
