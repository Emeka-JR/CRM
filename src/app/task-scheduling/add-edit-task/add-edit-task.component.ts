import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../Services/task.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from '../../Model/task.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.css']
})
export class AddEditTaskComponent implements OnInit {
  taskForm: FormGroup;
  isEditing = false;
  taskId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      dueDate: ['', Validators.required],
      status: ['Pending', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.taskId = params.get('id');
      if (this.taskId) {
        this.isEditing = true;
        this.taskService.getTaskById(this.taskId).subscribe(task => {
          this.taskForm.patchValue(task);
        });
      }
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const task: Task = this.taskForm.value;
      if (this.isEditing && this.taskId) {
        this.taskService.updateTask(this.taskId, task).subscribe(() => {
          this.router.navigate(['/task-list']);
        });
      } else {
        this.taskService.addTask(task).subscribe(() => {
          this.router.navigate(['/task-list']);
        });
      }
    }
  }
}
