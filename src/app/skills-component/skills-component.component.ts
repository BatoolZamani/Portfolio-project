import { Component } from '@angular/core';
import { BoxContentComponent } from '../components/box-content/box-content.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-component',
  standalone: true,
  imports: [BoxContentComponent,CommonModule],
  templateUrl: './skills-component.component.html',
  styleUrl: './skills-component.component.scss'
})
export class SkillsComponentComponent { 
  skills: { image: string; title: string }[] = [
    { image: './assets/img/html5.png', title: 'HTML' },
    { image: './assets/img/css.png', title: 'CSS' },
    { image: './assets/img/javascript.png', title: 'JavaScript' },
    { image: './assets/img/typescript.png', title: 'TypeScript' },
    { image: './assets/img/angular.png', title: 'Angular' },
    { image: './assets/img/firebase.png', title: 'Firebase' },
    { image: './assets/img/html5.png', title: 'HTML' },
    { image: './assets/img/css.png', title: 'CSS' },
    { image: './assets/img/javascript.png', title: 'JavaScript' },
    { image: './assets/img/typescript.png', title: 'TypeScript' },
    { image: './assets/img/angular.png', title: 'Angular' },
    { image: './assets/img/firebase.png', title: 'Firebase' },
    { image: './assets/img/Growthmindset.png', title: 'Growth mindset' }
  ];
}


