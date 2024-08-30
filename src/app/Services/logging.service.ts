import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LoggingService{
    http: HttpClient = inject(HttpClient);
    logError(data: {statusCode: number, errorMessage: string, datetime: Date}){
        this.http.post('https://crm-project-8bb92-default-rtdb.firebaseio.com/log.json', data)
        .subscribe();
    }

    fetcherrors(){
        this.http.get('https://crm-project-8bb92-default-rtdb.firebaseio.com/log.json')
        .subscribe((data) => {
            console.log(data);
        })
    }
}