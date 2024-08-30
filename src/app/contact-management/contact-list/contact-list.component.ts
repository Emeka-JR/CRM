import { Component, inject, OnInit } from '@angular/core';
import { ContactService } from '../../Services/contact.service';
import { contact } from '../../Model/Contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit {
  contacts: contact[] = [];
  currentContactId!: string;
  selectedContact!: contact;
  editMode: boolean = false;

  contactService: ContactService = inject(ContactService);

  ngOnInit(): void {
    this.loadContacts();
  }
  
  loadContacts(): void {
    this.contactService.getContacts().subscribe((data: any) => {
      this.contacts = Object.keys(data).map(key => ({ id: key, ...data[key] }));
    });
  }

  deleteContact(id: string | undefined): void {
    if (id) {
      if (confirm('Are you sure you want to delete this contact?')) {
        this.contactService.deleteContact(id).subscribe(() => {
          this.loadContacts(); // Refresh the contact list
        });
      }
    } else {
      console.error('Contact ID is undefined');
    }
  }

  
}
