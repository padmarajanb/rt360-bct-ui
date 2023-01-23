import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmailFrequencyConfigComponent } from './edit-email-frequency-config.component';

describe('EditEmailFrequencyConfigComponent', () => {
  let component: EditEmailFrequencyConfigComponent;
  let fixture: ComponentFixture<EditEmailFrequencyConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmailFrequencyConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmailFrequencyConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
