import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects-component',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './projects-component.component.html',
  styleUrl: './projects-component.component.scss'
})
export class ProjectsComponentComponent {
  projects: { id:string;imageurl:string; title: string; skills: string[] }[] = [
    { id: 'join', title: 'Join',imageurl:'assets/img/join-project.png',skills: ['JavaScript', 'Firebase', 'HTML','CSS'] },
    { id: 'WizardManGame', title: 'Wizard Man Game',imageurl:'assets/img/wizard-man-project.png', skills: ['JavaScript','CSS','HTML'] },
    { id: 'POKEMON', title: 'POKEMON',imageurl:'assets/img/pokedex-project.png', skills: ['JavaScript','ReST-API','HTML','CSS'] }
  ];
  
}
