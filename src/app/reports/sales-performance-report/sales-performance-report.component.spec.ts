import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPerformanceReportComponent } from './sales-performance-report.component';

describe('SalesPerformanceReportComponent', () => {
  let component: SalesPerformanceReportComponent;
  let fixture: ComponentFixture<SalesPerformanceReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesPerformanceReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesPerformanceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
