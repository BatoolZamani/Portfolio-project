import { Component } from '@angular/core';
import { BoxContentComponent } from "../box-content/box-content.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me-component',
  standalone: true,
  imports: [BoxContentComponent,TranslateModule],
  templateUrl: './about-me-component.component.html',
  styleUrl: './about-me-component.component.scss'
})
export class AboutMeComponentComponent {

}
