import { Component , OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { About } from '../../interfaces/about';
import { PortfolioService } from '../../services/portfolio.service';
import {CommonModule, NgFor} from '@angular/common';
import { ListComponentComponent } from '../list-component/list-component.component';
import { TimelineComponent } from '../timeline-component/timeline-component.component';

@Component({
  selector: 'app-about-component',
  standalone: true,
  imports: [NgFor, CommonModule,ListComponentComponent, TimelineComponent],
  templateUrl: './about-component.component.html',
  styleUrl: './about-component.component.css'
})
export class AboutComponent2 implements OnInit {
  about$: Observable<Array<About>> ;
  constructor(private portfolioService: PortfolioService) {
    this.about$ = this.portfolioService.getAbout(1);
  }
  getAbout(lan: number) {
    this.about$ = this.portfolioService.getAbout(lan);
  }
  ngOnInit() {
    this.getAbout(1);
  }
}
