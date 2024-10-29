import { Component } from '@angular/core';
import { PortfolioHeaderComponent } from '../portfolio-header/portfolio-header.component';
import { IntroductionComponent } from '../introduction/introduction.component';
import { AboutMeComponentComponent } from '../about-me-component/about-me-component.component';
import { BoxContentComponent } from '../box-content/box-content.component';
import { SkillsComponentComponent } from '../../skills-component/skills-component.component';
import { ProjectsComponentComponent } from '../../projects-component/projects-component.component';
import { MarqueeComponent } from '../marquee/marquee.component';
import { FeedbackSliderComponent } from '../feedback/feedback.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [PortfolioHeaderComponent,
    IntroductionComponent,
    AboutMeComponentComponent,
    BoxContentComponent,
    SkillsComponentComponent,
    ProjectsComponentComponent,
    MarqueeComponent,
    FeedbackSliderComponent,
    ContactMeComponent,
    FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
