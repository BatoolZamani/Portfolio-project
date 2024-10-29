import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioHeaderComponent } from "../portfolio-header/portfolio-header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [PortfolioHeaderComponent, FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
 
}

