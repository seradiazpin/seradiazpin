import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  @Input() title = "Elements"
  @Input() events = [];
  @Input() details= false;
  constructor() { 
    
  }

  ngOnInit(): void {
    console.log(this.events)
  }

}
