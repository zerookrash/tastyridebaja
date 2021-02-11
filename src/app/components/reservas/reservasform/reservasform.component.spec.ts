import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasformComponent } from './reservasform.component';

describe('ReservasformComponent', () => {
  let component: ReservasformComponent;
  let fixture: ComponentFixture<ReservasformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservasformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservasformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
