import { Observable } from 'rxjs';
import { About } from './../../interfaces/about';
import { PortfolioService } from './../../services/portfolio.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about$: Observable<Array<About>>;
  constructor(private portfolioService: PortfolioService) {
  }
  getAbout(lan: number) {
    this.about$ = this.portfolioService.getAbout(lan);
  }
  ngOnInit() {
    this.getAbout(1);
  }

}
