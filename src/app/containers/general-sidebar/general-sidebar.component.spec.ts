import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSidebarComponent } from './general-sidebar.component';

describe('SidebarComponent', () => {
    let component: GeneralSidebarComponent;
    let fixture: ComponentFixture<GeneralSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [GeneralSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
      fixture = TestBed.createComponent(GeneralSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
