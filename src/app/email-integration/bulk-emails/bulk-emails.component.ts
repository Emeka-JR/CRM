import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../Services/email.service';
import { contact } from '../../Model/Contact';

@Component({
  selector: 'app-bulk-emails',
  templateUrl: './bulk-emails.component.html',
  styleUrls: ['./bulk-emails.component.css']
})
export class BulkEmailsComponent implements OnInit {
  contacts: contact[] = [];
  selectedRecipients: string[] = [];
  subject: string = '';
  body: string = '';

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts(): void {
    this.emailService.getContacts().subscribe({
      next: (data) => {
        this.contacts = data;
      },
      error: (error) => {
        console.error('Failed to load contacts:', error);
      }
    });
  }

  sendEmails(): void {
    if (this.selectedRecipients.length === 0) {
      alert('Please select at least one recipient.');
      return;
    }

    this.emailService.sendBulkEmails(this.selectedRecipients, this.subject, this.body).subscribe({
      next: (response) => {
        alert('Emails sent successfully!');
        this.clearForm();
      },
      error: (error) => {
        console.error('Failed to send emails:', error);
        alert('Failed to send emails.');
      }
    });
  }

  clearForm(): void {
    this.selectedRecipients = [];
    this.subject = '';
    this.body = '';
  }
}
