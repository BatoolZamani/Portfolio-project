import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackSliderComponent {
  feedbacks = [
    {
      text: "Our project benefited enormously from Simon's efficient way of working.",
      author: "T. Schulz",
      role: "Frontend Developer"
    },
    {
      text: "Lukas has proven to be a reliable asset with strong technical skills and proactive approach.",
      author: "A. Fischer",
      role: "Team Partner"
    },
    {
      text: "Working with Lukas has been an incredibly rewarding experience due to his focus and dedication.",
      author: "C. Anderson",
      role: "Project Manager"
    }
  ];

  currentSlide = 0;

  // Move to the next slide
  nextSlide() {
    if (this.currentSlide < this.feedbacks.length - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0;
    }
  }

  // Move to the previous slide
  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.feedbacks.length - 1;
    }
  }

  // Jump to a specific slide
  goToSlide(slideIndex: number) {
    this.currentSlide = slideIndex;
  }
}
