import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactListComponent } from './contact-management/contact-list/contact-list.component';
import { AddEditContactComponent } from './contact-management/add-edit-contact/add-edit-contact.component';
import { ContactDetailsComponent } from './contact-management/contact-details/contact-details.component';
import { ContactNotesComponent } from './contact-management/contact-notes/contact-notes.component';
// import { ContactTagsComponent } from './contact-management/contact-tags/contact-tags.component';
import { PipelineOverviewComponent } from './sales-pipeline/pipeline-overview/pipeline-overview.component';
import { AddEditDealComponent } from './sales-pipeline/add-edit-deal/add-edit-deal.component';
import { DealListComponent } from './sales-pipeline/deal-list/deal-list.component';
import { DealDetailsComponent } from './sales-pipeline/deal-details/deal-details.component';
import { DealStagesComponent } from './sales-pipeline/deal-stages/deal-stages.component';
import { BulkEmailsComponent } from './email-integration/bulk-emails/bulk-emails.component';
import { HistoryComponent } from './email-integration/history/history.component';
import { TaskListComponent } from './task-scheduling/task-list/task-list.component';
import { TaskDetailsComponent } from './task-scheduling/task-details/task-details.component';
import { AddEditTaskComponent } from './task-scheduling/add-edit-task/add-edit-task.component';
import { TaskCalendarComponent } from './task-scheduling/task-calendar/task-calendar.component';
import { TaskRemindersComponent } from './task-scheduling/task-reminders/task-reminders.component';
import { SalesPipelineComponent } from './sales-pipeline/sales-pipeline.component';
import { SalesPerformanceReportComponent } from './reports/sales-performance-report/sales-performance-report.component';
import { CustomerInteractionComponent } from './reports/customer-interaction/customer-interaction.component';
import { ScheduledReportComponent } from './reports/scheduled-report/scheduled-report.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '',component:LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'list', component:ContactListComponent},
  { path: 'add-edit/:id', component: AddEditContactComponent },
  { path: 'add-edit-deal/:id', component: AddEditDealComponent },
  { path: 'deal-details/:id', component: DealDetailsComponent },
  {path: 'add-edit', component:AddEditContactComponent},
  {path: 'details/:id', component:ContactDetailsComponent},
  {path: 'notes', component:ContactNotesComponent},
  // {path: 'tags', component:ContactTagsComponent},

  {path: 'sales', component:PipelineOverviewComponent},
  {path: 'addSales', component:AddEditDealComponent},
  {path: 'dealList', component:DealListComponent},
  {path: 'dealDetails', component:DealDetailsComponent},
  {path: 'dealStages', component:DealStagesComponent},

  {path: 'bulk', component:BulkEmailsComponent},
  {path: 'history', component:HistoryComponent},

  {path: 'taskList', component:TaskListComponent},
  {path: 'taskDetails', component:TaskDetailsComponent},
  {path: 'addTasks', component:AddEditTaskComponent},
  {path: 'taskCalendar', component:TaskCalendarComponent},
  {path: 'taskReminder', component:TaskRemindersComponent},
  { path: 'task-details/:id', component: TaskDetailsComponent },

  {path: 'salesReport', component:SalesPerformanceReportComponent},
  {path: 'interactions', component:CustomerInteractionComponent},
  {path: 'scheduledReports', component:ScheduledReportComponent},

  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
