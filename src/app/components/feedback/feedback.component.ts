import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule],
})
export class FeedbackSliderComponent {
  feedbacks = [
    {
      text: 'I had the pleasure of working with Batool on two projects in the Developer Academy (DA). Their technical expertise and outstanding understanding of design, as well as their helpfulness and willingness to give their all, were crucial to the success of our team.',
      author: 'Sebastian Rothe',
      role: 'Team Partner',
    },
    {
      text: 'Batool is an exceptional coder with strong UI design skills, consistently delivering high-quality, user-friendly, and functional designs. She is reliable under pressure, meets deadlines, and goes the extra mile to ensure project success. Her technical expertise and dedication make her a valuable asset to any team.',
      author: 'Muaz Yildiz',
      role: 'Team Partner',
    },
    {
      text: 'I worked with Betty on the cookery world project. She is an extremely structured, personable and nice lady. You could tell that from the first few minutes. She was also by far the best designer in our group. As fast as she was, she was also focussed and determined. I really enjoyed working with Betty. She is someone you would always want in a group project.',
      author: 'Emre Isik',
      role: 'Team Partner',
    },
  ];

  currentSlide = 0;
  private startX = 0;
  private threshold = 50;

  // Go to the next slide, wrapping around when necessary
  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.feedbacks.length;
  }

  // Go to the previous slide, wrapping around when necessary
  prevSlide(): void {
    this.currentSlide =
      (this.currentSlide - 1 + this.feedbacks.length) % this.feedbacks.length;
  }

  // Go to a specific slide
  goToSlide(slideIndex: number): void {
    this.currentSlide = slideIndex;
  }

  // Helper to check if a slide is active
  isActive(index: number): boolean {
    return this.currentSlide === index;
  }

  // Helper to check if a slide is the previous one
  isPrev(index: number): boolean {
    return (
      (this.currentSlide - 1 + this.feedbacks.length) % this.feedbacks.length ===
      index
    );
  }

  // Helper to check if a slide is the next one
  isNext(index: number): boolean {
    return (this.currentSlide + 1) % this.feedbacks.length === index;
  }

  onTouchStart(event: any): void {
    this.startX = event.touches[0].clientX;
  }

  onTouchEnd(event: any): void {
    const deltaX = event.changedTouches[0].clientX - this.startX;
    if (deltaX > this.threshold) {
      this.prevSlide();
    } else if (deltaX < -this.threshold) {
      this.nextSlide();
    }
  }
}
