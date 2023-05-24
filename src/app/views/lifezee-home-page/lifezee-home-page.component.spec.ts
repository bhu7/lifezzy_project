import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifezeeHomePageComponent } from './lifezee-home-page.component';

describe('LifezeeHomePageComponent', () => {
  let component: LifezeeHomePageComponent;
  let fixture: ComponentFixture<LifezeeHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifezeeHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifezeeHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
