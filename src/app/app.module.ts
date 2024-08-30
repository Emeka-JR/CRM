import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactManagementComponent } from './contact-management/contact-management.component';
import { SalesPipelineComponent } from './sales-pipeline/sales-pipeline.component';
import { EmailIntegrationComponent } from './email-integration/email-integration.component';
import { TaskSchedulingComponent } from './task-scheduling/task-scheduling.component';
import { ContactListComponent } from './contact-management/contact-list/contact-list.component';
import { AddEditContactComponent } from './contact-management/add-edit-contact/add-edit-contact.component';
import { ContactDetailsComponent } from './contact-management/contact-details/contact-details.component';
import { ContactNotesComponent } from './contact-management/contact-notes/contact-notes.component';
// import { ContactTagsComponent } from './contact-management/contact-tags/contact-tags.component';
import { PipelineOverviewComponent } from './sales-pipeline/pipeline-overview/pipeline-overview.component';
import { DealDetailsComponent } from './sales-pipeline/deal-details/deal-details.component';
import { AddEditDealComponent } from './sales-pipeline/add-edit-deal/add-edit-deal.component';
import { DealListComponent } from './sales-pipeline/deal-list/deal-list.component';
import { DealStagesComponent } from './sales-pipeline/deal-stages/deal-stages.component';
import { BulkEmailsComponent } from './email-integration/bulk-emails/bulk-emails.component';
import { HistoryComponent } from './email-integration/history/history.component';
import { TaskListComponent } from './task-scheduling/task-list/task-list.component';
import { TaskDetailsComponent } from './task-scheduling/task-details/task-details.component';
import { AddEditTaskComponent } from './task-scheduling/add-edit-task/add-edit-task.component';
import { TaskCalendarComponent } from './task-scheduling/task-calendar/task-calendar.component';
import { TaskRemindersComponent } from './task-scheduling/task-reminders/task-reminders.component';
import { ReportsComponent } from './reports/reports.component';
import { SalesPerformanceReportComponent } from './reports/sales-performance-report/sales-performance-report.component';
import { CustomerInteractionComponent } from './reports/customer-interaction/customer-interaction.component';
import { ScheduledReportComponent } from './reports/scheduled-report/scheduled-report.component';
import { SidebarService } from './Services/sidebar.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    ContactManagementComponent,
    SalesPipelineComponent,
    EmailIntegrationComponent,
    TaskSchedulingComponent,
    ContactListComponent,
    AddEditContactComponent,
    ContactDetailsComponent,
    ContactNotesComponent,
    // ContactTagsComponent,
    PipelineOverviewComponent,
    DealDetailsComponent,
    AddEditDealComponent,
    DealListComponent,
    DealStagesComponent,
    BulkEmailsComponent,
    HistoryComponent,
    TaskListComponent,
    TaskDetailsComponent,
    AddEditTaskComponent,
    TaskCalendarComponent,
    TaskRemindersComponent,
    ReportsComponent,
    SalesPerformanceReportComponent,
    CustomerInteractionComponent,
    ScheduledReportComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    SidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
