import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DulceriaComponent } from './dulceria.component';

describe('DulceriaComponent', () => {
  let component: DulceriaComponent;
  let fixture: ComponentFixture<DulceriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DulceriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DulceriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
