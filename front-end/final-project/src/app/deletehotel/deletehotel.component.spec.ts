import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletehotelComponent } from './deletehotel.component';

describe('DeletehotelComponent', () => {
  let component: DeletehotelComponent;
  let fixture: ComponentFixture<DeletehotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletehotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletehotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
