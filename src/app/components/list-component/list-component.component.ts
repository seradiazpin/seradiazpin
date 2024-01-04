import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-component',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './list-component.component.html',
  styleUrl: './list-component.component.css'
})
export class ListComponentComponent implements OnInit{
  @Input() items = new Array<any>;
  @Input() title = "Title"
  constructor() { }

  ngOnInit(): void {
  }
}
