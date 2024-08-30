import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../Services/contact.service';
import { contact } from '../../Model/Contact';

@Component({
  selector: 'app-contact-notes',
  templateUrl: './contact-notes.component.html',
  styleUrls: ['./contact-notes.component.css']
})
export class ContactNotesComponent implements OnInit {
  contacts: contact[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts(): void {
    this.contactService.getContacts().subscribe((data) => {
      this.contacts = data;
    });
  }
}
