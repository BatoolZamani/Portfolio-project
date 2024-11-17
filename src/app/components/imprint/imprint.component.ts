import { Component } from '@angular/core';
import { PortfolioHeaderComponent } from '../portfolio-header/portfolio-header.component';
import { FooterComponent } from '../footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [PortfolioHeaderComponent,FooterComponent,TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

}
