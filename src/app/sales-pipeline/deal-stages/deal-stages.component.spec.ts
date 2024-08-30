import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealStagesComponent } from './deal-stages.component';

describe('DealStagesComponent', () => {
  let component: DealStagesComponent;
  let fixture: ComponentFixture<DealStagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DealStagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
