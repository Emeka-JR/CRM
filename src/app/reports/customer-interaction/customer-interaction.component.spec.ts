import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInteractionComponent } from './customer-interaction.component';

describe('CustomerInteractionComponent', () => {
  let component: CustomerInteractionComponent;
  let fixture: ComponentFixture<CustomerInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerInteractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
