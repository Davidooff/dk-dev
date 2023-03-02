import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallMeSectionComponent } from './call-me-section.component';

describe('CallMeSectionComponent', () => {
  let component: CallMeSectionComponent;
  let fixture: ComponentFixture<CallMeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallMeSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallMeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
