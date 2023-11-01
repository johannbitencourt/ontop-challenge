import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent {
  @Input() width: number = 100;
  @Input() height: number = 15;
  @Input() borderRadius: number = 15;
}
