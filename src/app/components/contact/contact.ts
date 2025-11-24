import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, RouterLink, TranslateModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private http = inject(HttpClient);

  // Form data model
  formData = {
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

    // Here you can send data to backend
    // Example: this.http.post('/api/contact', this.formData).subscribe(...)

    // Show success message (you can add this to template later)
    alert('Message sent successfully! Check console for data.');

    // Reset form after submission
    this.resetForm();
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
