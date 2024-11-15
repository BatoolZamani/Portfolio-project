import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './portfolio-header.component.html',
  styleUrl: './portfolio-header.component.scss'
})
export class PortfolioHeaderComponent {
 
  menuValue:boolean=false;
  constructor(private translate: TranslateService) {
    // Standard-Sprache auf Englisch setzen
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
  
  
  openMenu(){
    this.menuValue=!this.menuValue;
  }
  closeMenu(){
    this.menuValue=false;

  }
}
