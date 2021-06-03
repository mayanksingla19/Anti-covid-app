import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoRegisterComponent } from './co-register.component';

describe('CoRegisterComponent', () => {
  let component: CoRegisterComponent;
  let fixture: ComponentFixture<CoRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
