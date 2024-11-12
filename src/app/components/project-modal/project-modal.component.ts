import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common'; 
declare const window: any;
@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent {
  @Input() projectModalValue: boolean = false;
  @Output() toggle = new EventEmitter<boolean>();

  @Input() number: number = 0;
  @Input() title: string = '';
  @Input() imageUrl: string = '';
  @Input() skills: string[] = [];
  @Input() description: string = '';
  @Input() githubLink: string = '';

  @Input() nextProject?: Function;

  constructor(private renderer: Renderer2) {}

  toggleMenu() {
    this.projectModalValue = !this.projectModalValue;
    this.toggle.emit(this.projectModalValue);
  }

  onNextProjectClick() {
    if (this.nextProject) {
      this.nextProject();
    }
  }
 
  openExternalLink(url: string) {
    if (url) {
      (window as any).open(url, '_blank');
    }
  }
}