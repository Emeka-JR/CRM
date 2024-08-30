import { Component, inject, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../../Services/contact.service';
import { contact } from '../../Model/Contact';
import { HttpClient } from '@angular/common/http';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-add-edit-contact',
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.css']
})
export class AddEditContactComponent {
  http: HttpClient = inject(HttpClient);
  contactService: ContactService = inject(ContactService);
  @Input() isEditMode!: boolean;
  @Input() selectedContact!: contact;
  @ViewChild('form') form!: NgForm;
  @Output()
  EmitData: EventEmitter<contact> = new EventEmitter<contact>();
  onSubmit(form: NgForm) {
    if (form.invalid) {
      Object.keys(form.controls).forEach(field => {
        const control = form.control.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
      return;
    }
    // Handle form submission here
    // this.addContact(form.value);
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      this.form.form.patchValue(this.selectedContact);
    })
  }

  // data: any[] =[];

  addContact(data: any) {
    const newContact: contact = {
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone,
      notes: data.notes ? [data.notes] : [] // Wrap the note in an array
    };
    this.contactService.addContact(newContact);
  }
  
}
