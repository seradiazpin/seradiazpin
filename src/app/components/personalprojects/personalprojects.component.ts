import { Project } from './../../interfaces/project';
import { PortfolioService } from './../../services/portfolio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalprojects',
  templateUrl: './personalprojects.component.html',
  styleUrls: ['./personalprojects.component.css']
})
export class PersonalprojectsComponent implements OnInit {
  allProjects : Array<Project>
  constructor(private portfolioService:PortfolioService) { }
  getProjects(){
    this.portfolioService.getProjects().subscribe((projects)=>{
      this.allProjects = projects;
    })
  }
  ngOnInit() {
    this.getProjects();
  }

}
