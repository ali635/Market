import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProctsComponent } from './all-procts.component';

describe('AllProctsComponent', () => {
  let component: AllProctsComponent;
  let fixture: ComponentFixture<AllProctsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProctsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllProctsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
