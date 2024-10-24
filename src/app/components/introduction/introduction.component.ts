import { Component } from '@angular/core';
import { PortfolioHeaderComponent } from "../portfolio-header/portfolio-header.component";
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [PortfolioHeaderComponent,TranslateModule],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent {

}
