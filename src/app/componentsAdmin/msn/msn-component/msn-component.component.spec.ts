import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsnComponentComponent } from './msn-component.component';

describe('MsnComponentComponent', () => {
  let component: MsnComponentComponent;
  let fixture: ComponentFixture<MsnComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsnComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsnComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
