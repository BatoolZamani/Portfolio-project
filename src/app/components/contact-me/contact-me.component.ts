import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ReactiveFormsModule, TranslateModule, CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  userForm: FormGroup;
  isFormSubmitted: boolean = false;

  constructor(private http: HttpClient) {
    this.userForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.minLength(4)]),
      isAgree: new FormControl(false, [Validators.requiredTrue])
    });
  }

  post = {
    endPoint: 'https://batoolzamani.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit() {
    
    this.isFormSubmitted = true;
    

    if (this.userForm.valid) {
        const payload = {
            name: this.userForm.value.firstname,
            email: this.userForm.value.email,
            message: this.userForm.value.message,
            privacyAccepted: this.userForm.value.isAgree,
        };

        this.http.post(this.post.endPoint, this.post.body(payload), this.post.options)
            .subscribe({
                next: (response) => {
                   
                    this.userForm.reset();
                    this.isFormSubmitted = false;
                },
                error: (error) => {
                    console.error('Error:', error);
                },
                complete: () => console.info('Send post complete'),
            });
            
    } else {
        
    }
}
}