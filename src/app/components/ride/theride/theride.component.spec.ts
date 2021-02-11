import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherideComponent } from './theride.component';

describe('TherideComponent', () => {
  let component: TherideComponent;
  let fixture: ComponentFixture<TherideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
