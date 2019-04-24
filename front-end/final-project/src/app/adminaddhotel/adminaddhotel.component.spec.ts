import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddhotelComponent } from './adminaddhotel.component';

describe('AdminaddhotelComponent', () => {
  let component: AdminaddhotelComponent;
  let fixture: ComponentFixture<AdminaddhotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminaddhotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaddhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
