import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectModalComponent } from '../components/project-modal/project-modal.component';

@Component({
  selector: 'app-projects-component',
  standalone: true,
  imports: [TranslateModule,ProjectModalComponent],
  templateUrl: './projects-component.component.html',
  styleUrl: './projects-component.component.scss'
})
export class ProjectsComponentComponent {
  modalOpen: boolean = false;
  number:number=0;
  title:string='';
  imageUrl:string='';
  description:string='';
  skills: string[] = [];
  currentIndex: number = 0;
 

  projects: { 
    id: string; 
    imageurl: string; 
    title: string; 
    skills: string[]; 
    description: string;
    githubLink: string; 
    liveTestLink:string
  }[];
  
  constructor() {
    this.projects = [
      {
        id: 'join', 
        title: 'Join', 
        imageurl: 'assets/img/join-project.png', 
        description: 'A Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.', 
        skills: ['JavaScript', 'Firebase', 'HTML', 'CSS'],
        githubLink: 'https://github.com/BatoolZamani/Join-dummy' ,
        liveTestLink:'http://join.batoolzamani.de/'
      },
      {
        id: 'WizardManGame', 
        title: 'Wizard Man Game', 
        imageurl: 'assets/img/wizard-man-project.png', 
        description: 'Join Wizard Man on a thrilling adventure to collect coins and magical potions, gaining strength to battle fierce monsters.', 
        skills: ['JavaScript', 'CSS', 'HTML'],
        githubLink: 'https://github.com/BatoolZamani/Wizard-Man-Game' ,
        liveTestLink:'http://game.batoolzamani.de/'
      },
      {
        id: 'POKEMON', 
        title: 'Pokedex', 
        imageurl: 'assets/img/pokedex-project.png', 
        description: 'Based on a PokéAPI a simple library that provides and catalogues Pokemon information.', 
        skills: ['JavaScript', 'ReST-API', 'HTML', 'CSS'],
        githubLink: 'https://github.com/BatoolZamani/PokemonProject',
        liveTestLink:'http://pokedex.batoolzamani.de/' 
      }
    ];
  }
  
  githubLink: string = '';
  liveTestLink:string='';
  openProject(index: number, title: string, imageUrl: string, skills: string[], description: string, githubLink: string, liveTestLink: string) {
    this.currentIndex = index;
    this.number = index + 1;
    this.title = title;
    this.imageUrl = imageUrl;
    this.skills = skills;
    this.description = description;
    this.githubLink = githubLink;
    this.liveTestLink = liveTestLink;
    
    if (!this.modalOpen) {
      this.modalOpen = true;
    }
  }

  
  nextProject = () => {
    if (this.projects && this.projects.length > 0) {
      this.currentIndex = this.currentIndex + 1;

      if (this.currentIndex >= this.projects.length) {
        this.currentIndex = 0;
      }

      const nextProject = this.projects[this.currentIndex];

      this.openProject(
        this.currentIndex,
        nextProject.title,
        nextProject.imageurl,
        nextProject.skills,
        nextProject.description,
        nextProject.githubLink,
        nextProject.liveTestLink
      );
    } else {
      console.error("Projects array is undefined or empty!", this.projects);
    }
  };

  toggleModal(){
    this.modalOpen=!this.modalOpen;
  }
}
