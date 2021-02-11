import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTourComponentComponent } from './detalle-tour-component.component';

describe('DetalleTourComponentComponent', () => {
  let component: DetalleTourComponentComponent;
  let fixture: ComponentFixture<DetalleTourComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleTourComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleTourComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
