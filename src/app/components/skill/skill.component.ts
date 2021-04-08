import { Skill } from './../../interfaces/skill';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() skill;
  constructor() { }

  ngOnInit(): void {
  }

}
