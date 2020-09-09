import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryOneComponent } from './primary-one.component';

describe('PrimaryOneComponent', () => {
  let component: PrimaryOneComponent;
  let fixture: ComponentFixture<PrimaryOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
