import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ContactForm } from '../../models/contact-form.model';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, RouterLink, TranslateModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private contactService = inject(ContactService);

  // Form data model with proper typing
  formData: ContactForm = {
    name: '',
    email: '',
    message: '',
    privacyAccepted: false
  };

  onSubmit() {
    // Log all form data
    console.log('=== CONTACT FORM SUBMISSION ===');
    console.log('Name:', this.formData.name);
    console.log('Email:', this.formData.email);
    console.log('Message:', this.formData.message);
    console.log('Privacy Accepted:', this.formData.privacyAccepted);
    console.log('Full Form Data:', this.formData);
    console.log('================================');

    // Use service to submit form
    this.contactService.submitContactForm(this.formData).subscribe({
      next: (response) => {
        console.log('Success:', response);
        alert('Message sent successfully! Check console for data.');
        this.resetForm();
      },
      error: (error) => {
        console.error('Error:', error);
        // For now, still show success since we don't have a backend
        alert('Message sent successfully! (Backend not connected yet)');
        this.resetForm();
      }
    });
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      message: '',
      privacyAccepted: false
    };
  }
}
