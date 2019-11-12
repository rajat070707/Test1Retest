import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressapiComponent } from './expressapi.component';

describe('ExpressapiComponent', () => {
  let component: ExpressapiComponent;
  let fixture: ComponentFixture<ExpressapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
