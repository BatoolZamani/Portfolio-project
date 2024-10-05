import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  standalone: true,
  imports: [CommonModule] // Ensure CommonModule is imported
})
export class FeedbackSliderComponent {
  feedbacks = [
    { text: 'Our project benefited enormously from Simon’s efficient way of working.', author: 'T. Schulz', role: 'Frontend Developer' },
    { text: 'Lukas has proven to be a reliable asset with strong technical skills and a proactive approach.', author: 'A. Fischer', role: 'Team Partner' },
    { text: 'Working with Lukas has been an incredibly rewarding experience.', author: 'C. Anderson', role: 'Project Manager' }
  ];

  currentSlide = 0;

  // Go to the next slide, wrapping around when necessary
  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.feedbacks.length;
  }

  // Go to the previous slide, wrapping around when necessary
  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.feedbacks.length) % this.feedbacks.length;
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
    return (this.currentSlide - 1 + this.feedbacks.length) % this.feedbacks.length === index;
  }

  // Helper to check if a slide is the next one
  isNext(index: number): boolean {
    return (this.currentSlide + 1) % this.feedbacks.length === index;
  }
}
