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

  toggleMenu() {
    this.projectModalValue = !this.projectModalValue;
    this.toggle.emit(this.projectModalValue); // Emit the new value to the parent
    console.log("child modalOpen is",this.projectModalValue);
  }
  

}
