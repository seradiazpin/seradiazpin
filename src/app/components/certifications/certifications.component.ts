import { Component } from '@angular/core';
import { Education } from '../../interfaces/Education/Education';
import { PortfolioService } from '../../services/portfolio.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
  data: Array<Education> | undefined ;
  dataCertification: Array<Education> | undefined ;
  constructor(private portfolioService: PortfolioService) {
    this.getData();
 }
 getData() {
   this.portfolioService.getEducation().subscribe(
     (info)=>{
       this.data = info;
     }
   ) ;
   this.portfolioService.getCertifications().subscribe(
    (info)=>{
      this.dataCertification = info.sort((a,b) => (a.begin > b.begin)?1:(b.begin > a.begin)?-1:0);
    }
  ) ;
 }
 ngOnInit() {
   this.getData();
 }
}
