import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../Services/email.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  emailHistory: any[] = [];

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    this.loadEmailHistory();
  }

  loadEmailHistory(): void {
    this.emailService.getEmailHistory().subscribe({
      next: (history) => {
        this.emailHistory = history ? Object.values(history) : []; // Ensure the response is an array
      },
      error: (error) => {
        console.error('Failed to load email history:', error);
      }
    });
  }
}
