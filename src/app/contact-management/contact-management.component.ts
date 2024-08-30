import { Component } from '@angular/core';
import { contact } from '../Model/Contact';

@Component({
  selector: 'app-contact-management',
  templateUrl: './contact-management.component.html',
  styleUrl: './contact-management.component.css'
})
export class ContactManagementComponent {
  editModeDetails!: boolean;
  selectedContactDetails!: contact;

 receiveEdit(data: boolean){
  this.editModeDetails=data;
 }
 receiveContact(data: contact){
  this.selectedContactDetails=data;
 }
}
