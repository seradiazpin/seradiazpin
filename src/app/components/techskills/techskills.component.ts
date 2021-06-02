import { Skill } from './../../interfaces/skill';
import { PortfolioService } from './../../services/portfolio.service';
import { Component, OnInit } from '@angular/core';
import _ from 'lodash'

@Component({
  selector: 'app-techskills',
  templateUrl: './techskills.component.html',
  styleUrls: ['./techskills.component.css']
})
export class TechskillsComponent implements OnInit {
  languages : Array<Skill>;
  frontEnd:  Array<Skill>;
  backEnd:  Array<Skill>;
  cloud:  Array<Skill>;
  AI:Array<Skill>;
  form = {}
  constructor(private portfolioService:PortfolioService) { }
  getSkills(){
    this.portfolioService.getSkills().subscribe((skills)=>{
      console.log(skills)
      this.languages = _.filter(skills, (skill)=>{return skill.tag === 'language'})
      this.frontEnd = _.filter(skills, (skill)=>{return skill.tag === 'frontEnd'})
      this.backEnd = _.filter(skills, (skill)=>{return skill.tag === 'backEnd'})
      this.cloud = _.filter(skills, (skill)=>{return skill.tag === 'cloud'})
      this.AI = _.filter(skills, (skill)=>{return skill.tag === 'AI'})
    });
  }
  ngOnInit() {
    this.getSkills();
  }
  onSubmit() {

    this.portfolioService.storeSkill(this.form);
  }
}
