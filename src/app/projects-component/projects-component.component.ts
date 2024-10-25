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

  projects: { id:string; imageurl:string; title: string; skills: string[] }[] = [
    { id: 'join', title: 'Join',imageurl:'assets/img/join-project.png',skills: ['JavaScript', 'Firebase', 'HTML','CSS'] },
    { id: 'WizardManGame', title: 'Wizard Man Game',imageurl:'assets/img/wizard-man-project.png', skills: ['JavaScript','CSS','HTML'] },
    { id: 'POKEMON', title: 'POKEMON',imageurl:'assets/img/pokedex-project.png', skills: ['JavaScript','ReST-API','HTML','CSS'] }
  ];
  

  openProject(index:number,title:string,imageUrl:string){
    this.number=index+1;
    this.title=title;
    this.imageUrl=imageUrl;
    this.modalOpen=!this.modalOpen;
    console.log("parent modalOpen is",this.modalOpen);
  }

  toggleModal(){
    this.modalOpen=!this.modalOpen;
  }
}
