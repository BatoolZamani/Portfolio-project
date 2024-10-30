import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss'
})
export class ProjectModalComponent {
  @Input() projectModalValue:boolean=false;
  @Output() toggle = new EventEmitter<boolean>();

  @Input() number:Number=0;
  @Input() title:string='';
  @Input() imageUrl:string='';
  @Input() skills: string[] = [];
  @Input() description:string='';
  

  toggleMenu() {
    this.projectModalValue = !this.projectModalValue;
    this.toggle.emit(this.projectModalValue); 
    console.log("child modalOpen is",this.projectModalValue);
  }
  

}
