import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatepageComponent } from './ratepage.component';

describe('RatepageComponent', () => {
  let component: RatepageComponent;
  let fixture: ComponentFixture<RatepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
