import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputSectionComponent } from './output-section.component';

describe('OutputSectionComponent', () => {
  let component: OutputSectionComponent;
  let fixture: ComponentFixture<OutputSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
