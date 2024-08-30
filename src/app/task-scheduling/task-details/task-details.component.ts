import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../Services/task.service';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../Model/task.model';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  task: Task | undefined;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.taskService.getTaskById(id).subscribe(task => {
        this.task = task;
      });
    }
  }
}
