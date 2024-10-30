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
  number:Number=0;
  title:string='';
  imageUrl:string='';
  description:string='';
  skills: string[] = [];

  projects: { id:string; imageurl:string; title: string; skills: string[];description:string }[] = [
    { id: 'join', title: 'Join',imageurl:'assets/img/join-project.png',description:'A Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',skills: ['JavaScript', 'Firebase', 'HTML','CSS'] },
    { id: 'WizardManGame', title: 'Wizard Man Game',imageurl:'assets/img/wizard-man-project.png',description:'Join Wizard Man on a thrilling adventure to collect coins and magical potions, gaining strength to battle fierce monsters.', skills: ['JavaScript','CSS','HTML'] },
    { id: 'POKEMON', title: 'POKEMON',imageurl:'assets/img/pokedex-project.png',description:'Based on a PokéAPI a simple library that provides and catalogues Pokemon information.', skills: ['JavaScript','ReST-API','HTML','CSS'] }
  ];
  

  openProject(index:number,title:string,imageUrl:string,skills:string[],description:string){
    this.number=index+1;
    this.title=title;
    this.imageUrl=imageUrl;
    this.skills =skills;
    this.description=description;
    this.modalOpen=!this.modalOpen;
    console.log("parent modalOpen is",this.modalOpen);
  }

  toggleModal(){
    this.modalOpen=!this.modalOpen;
  }
}
