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
  constructor(public translate: TranslateService) {
    // Überprüfen, ob eine Sprache im Local Storage gespeichert ist
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      // Wenn eine Sprache gespeichert ist, setze sie als aktuelle Sprache
      this.translate.use(savedLanguage);
    } else {
      // Wenn keine Sprache gespeichert ist, setze Englisch als Standard
      this.translate.setDefaultLang('en');
    }
  }

 // Methode zum Umschalten der Sprache
 switchLanguage(language: string) {
  this.translate.use(language);
  // Sprache im Local Storage speichern
  localStorage.setItem('language', language);
}
  
  
  openMenu(){
    this.menuValue=!this.menuValue;
  }
  closeMenu(){
    this.menuValue=false;

  }
}
