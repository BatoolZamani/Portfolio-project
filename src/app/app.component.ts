import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { PortfolioHeaderComponent } from "./components/portfolio-header/portfolio-header.component";
import { IntroductionComponent } from "./components/introduction/introduction.component";
import { AboutMeComponentComponent } from "./components/about-me-component/about-me-component.component";
import { BoxContentComponent } from './components/box-content/box-content.component';
import { SkillsComponentComponent } from './skills-component/skills-component.component';
import { ProjectsComponentComponent } from "./projects-component/projects-component.component";
import { MarqueeComponent } from './components/marquee/marquee.component';
import { FeedbackSliderComponent } from './components/feedback/feedback.component';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { interval as observableInterval } from "rxjs";
import { takeWhile, scan, tap } from "rxjs/operators";

// Für ngx-translate
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { MainComponent } from './components/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MainComponent,
    CommonModule,
    RouterOutlet,
    // ngx-translate Imports
    HttpClientModule,
    TranslateModule,
    RouterModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio-project';

}