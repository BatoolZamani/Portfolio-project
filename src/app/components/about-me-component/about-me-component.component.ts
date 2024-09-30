import { Component } from '@angular/core';
import { BoxContentComponent } from "../box-content/box-content.component";

@Component({
  selector: 'app-about-me-component',
  standalone: true,
  imports: [BoxContentComponent],
  templateUrl: './about-me-component.component.html',
  styleUrl: './about-me-component.component.scss'
})
export class AboutMeComponentComponent {

}
