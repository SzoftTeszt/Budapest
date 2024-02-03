import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UjFelmereComponent } from './uj-felmere.component';

describe('UjFelmereComponent', () => {
  let component: UjFelmereComponent;
  let fixture: ComponentFixture<UjFelmereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UjFelmereComponent]
    });
    fixture = TestBed.createComponent(UjFelmereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
