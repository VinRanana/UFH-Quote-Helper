import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSectionComponent } from './input-section.component';

describe('InputSectionComponent', () => {
  let component: InputSectionComponent;
  let fixture: ComponentFixture<InputSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
