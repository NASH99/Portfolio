import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechComponent } from './components/tech/tech.component';



@NgModule({
  declarations: [TechComponent],
  imports: [CommonModule],
  exports: [TechComponent]
})
export class PortfolioModule { }
