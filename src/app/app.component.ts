import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PortfolioHeaderComponent } from "./components/portfolio-header/portfolio-header.component";
import { IntroductionComponent } from "./components/introduction/introduction.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PortfolioHeaderComponent, IntroductionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio-project';
}
