import { Component } from '@angular/core';
import { PortfolioHeaderComponent } from "../portfolio-header/portfolio-header.component";

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [PortfolioHeaderComponent],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent {

}
