import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { contact } from '../Model/Contact';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  http: HttpClient = inject(HttpClient);

  addContact(contacts: contact): Observable<void> {
    return this.http.post<void>('https://crm-project-8bb92-default-rtdb.firebaseio.com/contactList.json', contacts);
  }

  getContacts(): Observable<contact[]> {
    return this.http.get<{ [key: string]: contact }>('https://crm-project-8bb92-default-rtdb.firebaseio.com/contactList.json')
      .pipe(
        map(data => Object.keys(data).map(key => {
          const contact = { id: key, ...data[key] };
          contact.notes = contact.notes ? (Array.isArray(contact.notes) ? contact.notes : [contact.notes]) : [];
          return contact;
        }))
      );
  }
   
  getContactById(id: string): Observable<contact> {
    return this.http.get<contact>(`https://crm-project-8bb92-default-rtdb.firebaseio.com/contactList/${id}.json`).pipe(
      map(contact => {
        if (!contact) {
          throw new Error('Contact not found');
        }
        return contact;
      }),
      catchError(error => {
        console.error('Error fetching contact by ID:', error);
        return throwError(error);
      })
    );
  }
  
  UpdateContact(id: string | undefined, updatedContact: contact): Observable<void> {
    return this.http.put<void>(`https://crm-project-8bb92-default-rtdb.firebaseio.com/contactList/${id}.json`, updatedContact);
  }

  deleteContact(id: string): Observable<void>  {
    return this.http.delete<void>(`https://crm-project-8bb92-default-rtdb.firebaseio.com/contactList/${id}.json`);
  }
  
  constructor() { }
}
