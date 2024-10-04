import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-component',
  standalone: true,
  imports: [],
  templateUrl: './projects-component.component.html',
  styleUrl: './projects-component.component.scss'
})
export class ProjectsComponentComponent {
  projects: { id:string;imageurl:string; title: string; skills: string[] }[] = [
    { id: 'join', title: 'Join',imageurl:'assets/img/joinscreen.png',skills: ['Angular', 'TypeScript', 'HTML','Firebase'] },
    { id: 'elPoloLoco', title: 'El Polo Loco',imageurl:'assets/img/elpololocoscreen.png', skills: ['HTML','CSS','JavaScript'] },
    { id: 'daBubble', title: 'Da Bubble',imageurl:'assets/img/Dabubble.png', skills: ['Angular','Firebase','TypeScript'] }
  ];
  
}
