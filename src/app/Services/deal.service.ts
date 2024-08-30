import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deal } from '../Model/deal';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DealService {
  private apiUrl = 'https://crm-project-8bb92-default-rtdb.firebaseio.com/salesPipeline';

  constructor(private http: HttpClient) {}

  addDeal(deal: Deal): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}.json`, deal);
  }

  getDeals(): Observable<Deal[]> {
    return this.http.get<{ [key: string]: Deal }>(`${this.apiUrl}.json`).pipe(
      map(dealData => {
        const deals: Deal[] = [];
        for (const key in dealData) {
          if (dealData.hasOwnProperty(key)) {
            deals.push({ id: key, ...dealData[key] });
          }
        }
        return deals;
      })
    );
  }

  getDealById(id: string): Observable<Deal> {
    return this.http.get<Deal>(`${this.apiUrl}/${id}.json`);
  }

  updateDeal(id: string, updatedDeal: Deal): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}.json`, updatedDeal);
  }

  deleteDeal(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}.json`);
  }
}
