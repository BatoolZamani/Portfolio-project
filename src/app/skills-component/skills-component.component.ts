import { Component } from '@angular/core';
import { BoxContentComponent } from '../components/box-content/box-content.component';

@Component({
  selector: 'app-skills-component',
  standalone: true,
  imports: [BoxContentComponent],
  templateUrl: './skills-component.component.html',
  styleUrl: './skills-component.component.scss'
})
export class SkillsComponentComponent {

}
