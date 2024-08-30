import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../Services/task.service';
import { Task } from '../../Model/task.model';

@Component({
  selector: 'app-task-reminders',
  templateUrl: './task-reminders.component.html',
  styleUrls: ['./task-reminders.component.css']
})
export class TaskRemindersComponent implements OnInit {
  reminders: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.reminders = tasks.filter(task => task.status === 'Pending'); // Filter pending tasks as reminders
    });
  }
}
