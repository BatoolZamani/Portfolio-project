import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PortfolioHeaderComponent } from "./components/portfolio-header/portfolio-header.component";
import { IntroductionComponent } from "./components/introduction/introduction.component";
import { AboutMeComponentComponent } from "./components/about-me-component/about-me-component.component";
import { BoxContentComponent } from './components/box-content/box-content.component';
import { SkillsComponentComponent } from './skills-component/skills-component.component';
import { ProjectsComponentComponent } from "./projects-component/projects-component.component";
import { MarqueeComponent } from './components/marquee/marquee.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PortfolioHeaderComponent, IntroductionComponent, AboutMeComponentComponent, BoxContentComponent, SkillsComponentComponent, ProjectsComponentComponent,ProjectsComponentComponent,MarqueeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio-project';
}
