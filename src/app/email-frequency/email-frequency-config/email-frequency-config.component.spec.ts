import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailFrequencyConfigComponent } from './email-frequency-config.component';

describe('EmailFrequencyConfigComponent', () => {
  let component: EmailFrequencyConfigComponent;
  let fixture: ComponentFixture<EmailFrequencyConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailFrequencyConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailFrequencyConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
