import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ContactForm } from '../../models/contact-form.model';
import { ContactService } from '../../services/contact.service';
import { CtaButton } from '../../shared/cta-button/cta-button';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, RouterLink, TranslateModule, CtaButton],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private contactService = inject(ContactService);

  http = inject(HttpClient);

  // Form data model
  formData: ContactForm = {
    name: '',
    email: '',
    message: ''
  };

  // Privacy checkbox (required but not sent with form data)
  privacyAccepted = false;

  mailTest = false;

  post = {
    endPoint: 'http://localhost/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.formData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }
}
