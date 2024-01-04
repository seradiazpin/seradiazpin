import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-panel.component.html',
  styleUrl: './nav-panel.component.css'
})
export class NavPanelComponent {
  @Input() selected = 1
  setSectionSelected(selected: number) {
    this.selected = selected;
  }
}
