import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, throwError } from 'rxjs';
import { Task } from '../Model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://crm-project-8bb92-default-rtdb.firebaseio.com/tasks.json';

  constructor(private http: HttpClient) { }

  // Add a new task
  addTask(task: Task): Observable<void> {
    return this.http.post<void>(this.apiUrl, task);
  }

  // Get all tasks
  getTasks(): Observable<Task[]> {
    return this.http.get<{ [key: string]: Task }>(this.apiUrl).pipe(
      map(data => Object.keys(data).map(key => ({ id: key, ...data[key] } as Task)))
    );
  }

  // Get a single task by ID
  getTaskById(id: string): Observable<Task> {
    return this.http.get<Task>(`https://crm-project-8bb92-default-rtdb.firebaseio.com/tasks/${id}.json`).pipe(
      catchError(error => {
        console.error('Error fetching task by ID:', error);
        return throwError(error);
      })
    );
  }

  // Update an existing task
  updateTask(id: string, updatedTask: Task): Observable<void> {
    return this.http.put<void>(`https://crm-project-8bb92-default-rtdb.firebaseio.com/tasks/${id}.json`, updatedTask);
  }

  // Delete a task
  deleteTask(id: string): Observable<void> {
    return this.http.delete<void>(`https://crm-project-8bb92-default-rtdb.firebaseio.com/tasks/${id}.json`);
  }
}
