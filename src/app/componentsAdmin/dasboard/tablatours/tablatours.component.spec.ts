import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablatoursComponent } from './tablatours.component';

describe('TablatoursComponent', () => {
  let component: TablatoursComponent;
  let fixture: ComponentFixture<TablatoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablatoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablatoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
