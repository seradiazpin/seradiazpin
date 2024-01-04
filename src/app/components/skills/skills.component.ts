import { Component } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Experience } from '../../interfaces/experience';
import { CommonModule, NgFor } from '@angular/common';
import { Skill } from '../../interfaces/skill';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  data: Array<Experience> | undefined ;
  dataSkills: Array<Skill> | undefined ;
  constructor(private portfolioService: PortfolioService) {
    this.getData();
 }
 getData() {
   this.portfolioService.getExperience().subscribe(
     (info)=>{
       this.data = info;
     }
   ) ;
   this.portfolioService.getSkills().subscribe(
    (info)=>{
      this.dataSkills = info;
    }
  ) ;
 }
 ngOnInit() {
   this.getData();
 }
}
