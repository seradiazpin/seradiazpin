import { PortfolioService } from './../../services/portfolio.service';
import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/interfaces/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience:Array<Experience>
  constructor(private portfolioService:PortfolioService) { }
  getExperience(){
    this.portfolioService.getExperience().subscribe((experience)=>{
      this.experience = experience;
    })
  }
  dateFormat(item: Experience){
    return 
  }
  ngOnInit() {
    this.getExperience();
  }

}
