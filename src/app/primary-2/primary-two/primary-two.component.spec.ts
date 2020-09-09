import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryTwoComponent } from './primary-two.component';

describe('PrimaryTwoComponent', () => {
  let component: PrimaryTwoComponent;
  let fixture: ComponentFixture<PrimaryTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
