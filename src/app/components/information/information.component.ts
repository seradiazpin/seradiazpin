import { Information } from './../../interfaces/Information/Information';
import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent implements OnInit{
  data: Information | undefined;
  constructor(private portfolioService: PortfolioService) {
     this.getData();
  }
  getData() {
    this.portfolioService.getInfo().subscribe(
      (info)=>{
        this.data = info[1];
      }
    ) ;
  }
  ngOnInit() {
    this.getData();
  }
}
