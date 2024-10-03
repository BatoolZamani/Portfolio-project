import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-component',
  standalone: true,
  imports: [],
  templateUrl: './projects-component.component.html',
  styleUrl: './projects-component.component.scss'
})
export class ProjectsComponentComponent {
  projects: { title: string; skills: string[] }[] = [
    { title: 'Join', skills: ['Angular', 'TypeScript', 'HTML','Firebase'] },
    { title: 'El Polo Loco', skills: ['HTML','CSS','JavaScript'] },
    { title: 'Da Bubble', skills: ['Angular','Firebase','TypeScript'] }
  ];
  
}
