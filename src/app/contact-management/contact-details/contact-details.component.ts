import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactService } from '../../Services/contact.service';
import { ActivatedRoute } from '@angular/router';
import { contact} from '../../Model/Contact';
// import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  contact: contact | null = null;
  // newNoteContent: string = '';
  contacts: contact[] = [];
  @Output() 
  editMode: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() 
  selectedContact: EventEmitter<contact> = new EventEmitter<contact>();
  currentContactId!: string;


  constructor(private contactService: ContactService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string | null;
    if (id) {
      this.loadContactDetails(id);
    }
  }

  loadContactDetails(id: string): void {
    this.contactService.getContactById(id).subscribe((data) => {
      this.contact = data;
    });
  }

  OnEditContact(id: string){
    this.currentContactId = id;
    this.editMode.emit(true);
    this.selectedContact.emit(this.contacts.find((contact)=> contact.id === id) as contact);
  }
  

  

  
}
