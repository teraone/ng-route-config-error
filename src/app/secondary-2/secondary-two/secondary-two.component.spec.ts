import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryTwoComponent } from './secondary-two.component';

describe('SecondaryTwoComponent', () => {
  let component: SecondaryTwoComponent;
  let fixture: ComponentFixture<SecondaryTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
