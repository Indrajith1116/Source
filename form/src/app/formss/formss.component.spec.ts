import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormssComponent } from './formss.component';

describe('FormssComponent', () => {
  let component: FormssComponent;
  let fixture: ComponentFixture<FormssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
