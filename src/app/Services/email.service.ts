import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { contact } from '../Model/Contact';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private baseUrl = 'https://crm-project-8bb92-default-rtdb.firebaseio.com'; // Base URL for your Firebase project

  constructor(private http: HttpClient) {}

  // Fetch contacts from Firebase
  getContacts(): Observable<contact[]> {
    return this.http.get<contact[]>(`${this.baseUrl}/contactList.json`);
  }

  // Send bulk emails to selected contacts
  sendBulkEmails(recipients: string[], subject: string, body: string): Observable<any> {
    const emailData = { recipients, subject, body, date: new Date().toISOString() };
    return this.http.post(`${this.baseUrl}/emailHistory.json`, emailData);
  }

  // Fetch email history from Firebase
  getEmailHistory(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/emailHistory.json`);
  }
}
