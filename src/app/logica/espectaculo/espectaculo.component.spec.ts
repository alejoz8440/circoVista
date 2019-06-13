import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspectaculoComponent } from './espectaculo.component';

describe('EspectaculoComponent', () => {
  let component: EspectaculoComponent;
  let fixture: ComponentFixture<EspectaculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspectaculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspectaculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
