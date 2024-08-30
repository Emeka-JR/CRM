import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskRemindersComponent } from './task-reminders.component';

describe('TaskRemindersComponent', () => {
  let component: TaskRemindersComponent;
  let fixture: ComponentFixture<TaskRemindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskRemindersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskRemindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
