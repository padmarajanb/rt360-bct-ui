import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmailTemplateConfigComponent } from './create-email-template-config.component';

describe('CreateEmailTemplateConfigComponent', () => {
  let component: CreateEmailTemplateConfigComponent;
  let fixture: ComponentFixture<CreateEmailTemplateConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmailTemplateConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmailTemplateConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
