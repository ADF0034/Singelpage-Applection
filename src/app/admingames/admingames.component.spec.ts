import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmingamesComponent } from './admingames.component';

describe('AdmingamesComponent', () => {
  let component: AdmingamesComponent;
  let fixture: ComponentFixture<AdmingamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmingamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmingamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
