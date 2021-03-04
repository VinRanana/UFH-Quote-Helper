import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputLineComponent } from './output-line.component';

describe('OutputLineComponent', () => {
  let component: OutputLineComponent;
  let fixture: ComponentFixture<OutputLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
