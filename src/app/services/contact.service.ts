import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactForm } from '../models/contact-form.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = '/api/contact'; // TODO: Move to environment configuration

  constructor(private http: HttpClient) {}

  submitContactForm(formData: ContactForm): Observable<any> {
    // For now, this simulates the API call
    // Replace with actual HTTP POST when backend is ready
    console.log('Contact form submitted:', formData);
    return this.http.post(this.apiUrl, formData);
  }
}
