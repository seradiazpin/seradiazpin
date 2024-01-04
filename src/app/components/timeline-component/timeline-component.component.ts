import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-component',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './timeline-component.component.html',
  styleUrl: './timeline-component.component.css'
})
export class TimelineComponent implements OnInit {
  @Input() title = "Elements"
  @Input() events = new Array<any>;
  @Input() details= false;
  constructor() { 
    
  }

  ngOnInit(): void {
    console.log(this.events)
  }
}
