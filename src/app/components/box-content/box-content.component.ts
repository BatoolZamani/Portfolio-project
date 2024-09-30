import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box-content',
  standalone: true,
  imports: [],
  templateUrl: './box-content.component.html',
  styleUrl: './box-content.component.scss'
})
export class BoxContentComponent {
  @Input() title! : string;
  @Input() header! : string;


}
