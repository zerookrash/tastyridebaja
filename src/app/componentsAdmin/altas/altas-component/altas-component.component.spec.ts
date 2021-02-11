import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltasComponentComponent } from './altas-component.component';

describe('AltasComponentComponent', () => {
  let component: AltasComponentComponent;
  let fixture: ComponentFixture<AltasComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltasComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
